import React from 'react'
import ReactDOM from 'react-dom/client'
import Usuario from './components/Usuario'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Usuario nombre="NDrake" edad={31} direccion={ { calle: "Avenida Quien sabe prueba", oficina: "OF 605", ciudad: "Tal vez", pais: "NoExiste"}  }/>

    </React.StrictMode>
)
