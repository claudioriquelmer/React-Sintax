import { useState } from 'react'

const Hooks = () => {

    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador + 1)
    };

    return (
        <button onClick={aumentar}>
            Has hecho clic {contador} veces
        </button>
    );
};

export default Hooks
