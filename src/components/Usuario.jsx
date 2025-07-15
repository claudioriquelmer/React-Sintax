/*Utilizando Props*/
import PropTypes from 'prop-types';

const Usuario = ({ nombre, edad, direccion }) => {
    return (
        <div>
            <h1>👤 {nombre}</h1>
            <h2>📅 Edad: {edad} años</h2>
            <h3>📍 Dirección</h3>
            <p>Calle: {direccion.calle}</p>
            <p>Oficina: {direccion.oficina}</p>
            <p>Ciudad: {direccion.ciudad}</p>
            <p>País: {direccion.pais}</p>
        </div>
    );
};

Usuario.propTypes = {

    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,

    direccion: PropTypes.shape({
        calle: PropTypes.string.isRequired,
        oficina: PropTypes.string.isRequired,
        ciudad: PropTypes.string.isRequired,
        pais: PropTypes.string.isRequired
    }).isRequired

};

export default Usuario;