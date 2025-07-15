import Usuario from './components/Usuario';

const App = () => {
    return (<>

        <Usuario nombre="NDrake" edad={31} direccion={ { calle: "Avenida Quien sabe prueba", oficina: "OF 605", ciudad: "Tal vez", pais: "NoExiste"}  }/>

    </>);
};

export default App;