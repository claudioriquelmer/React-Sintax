import { useState, useEffect } from 'react';
/*consulta API con UseEffect*/
const UsuarioAPI = () => {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/users/1')
            .then(response => response.json())
            .then(data => setUsuario(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return ( <>

        {
            usuario
                ? <pre>{ JSON.stringify(usuario, null, 2) }</pre>
                : 'Cargando datos...'
        }

    </>);
};

export default UsuarioAPI;