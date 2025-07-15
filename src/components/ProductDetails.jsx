const ProductDetails = ({ title, description, price, image }) => {
    return (
        <>
            <h1>🛍️ Detalle del Producto</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>💰 Precio: ${price}</p>
            <img src={image} alt={title} width="150" />
        </>
    );
};

export default ProductDetails;