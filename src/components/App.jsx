import useGet from "../hooks/useGet";
import ProductDetails from "../components/ProductDetails";

const App = () => {
    const { data, loading, error } = useGet("https://fakestoreapi.com/products/1");

    if (loading) return <p>⏳ Cargando...</p>;
    if (error) return <p>❌ Error: {error.message}</p>;

    return (<>

        <ProductDetails
            title={data.title}
            description={data.description}
            price={data.price}
            image={data.image}
        />


    </>);
};

export default App;