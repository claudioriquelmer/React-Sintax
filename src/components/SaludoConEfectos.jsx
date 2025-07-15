import { useState, useEffect } from 'react';

const SaludoReactivo = () => {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (nombre.trim() !== '') {
            setMensaje(`¡Hola, ${nombre}! Bienvenido 👋`);
        } else {
            setMensaje('');
        }
    }, [nombre]);

    return (
        <>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                onChange={(e) => setNombre(e.target.value)}
            />
            <h2>{mensaje}</h2>
        </>
    );
};

export default SaludoReactivo;