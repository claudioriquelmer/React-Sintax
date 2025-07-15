import { useState } from 'react'

// Componente
const Contador = ({  valorInicial }) => {


    // Estado
    const [ state, setState ]  = useState(valorInicial)

    // Lógica del componente
    const sumar = () => {

        setState( state + 1 )

    }

    const restar = () => {

        setState( state - 1 )

    }

    const resetear = () => {

        setState( valorInicial )

    }

    // Interfáz UI del componente
    return (<>

        <h1>🧮 Contador: { state }</h1>

        <button onClick={ sumar }>Suma +1</button>
        <button onClick={ restar }>Resta -1</button>
        <button onClick={ resetear }>Resetear</button>

    </>)


}



export default Contador