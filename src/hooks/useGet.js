import { useState, useEffect } from 'react';

const useGet = (url) => {

    const [data, setData] = useState(null);         // los datos que vienen de la API
    const [loading, setLoading] = useState(true);   // ¿todavía está cargando?
    const [error, setError] = useState(null);       // ¿hubo algún error?

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true); // empezamos la carga

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Respuesta no válida del servidor');
                const result = await response.json();
                setData(result);  // ¡listo! guardamos los datos

            }

            catch (err) {
                setError(err);    // ouch, algo salió mal
            }

            setLoading(false); // terminamos la carga

        };

        fetchData();

    }, [url]); // se ejecuta cada vez que la URL cambia

    return { data, loading, error }; // devolvemos los 3 estados
};

export default useGet;
