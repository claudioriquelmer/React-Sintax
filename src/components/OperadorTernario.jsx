import { useState } from 'react';

const MostrarOcultar = () => {

    const [mostrar, setMostrar] = useState(true);

    return (
        <div>
            <h1>{ mostrar ? "👋 ¡Hola! Qué bueno verte por aquí." : "🙈 Ups... mensaje oculto" }</h1>

            <button onClick={ () => setMostrar(!mostrar) }>{ mostrar ? "Ocultar mensaje" : "Mostrar mensaje" } </button>

        </div>
    );
};

export default MostrarOcultar;