import PropTypes from "prop-types";
import Card from "./Card";

const Products = (props) => {
    if (props.error) return <p>A network error was encountered</p>;
	if (props.loading) return <p>Loading...</p>;

    return (
        <main>
            <Card data={props.productList[0]} addToCart={props.addToCart} changeAmount={props.changeAmount}/>
        </main>
    );
};

Products.propTypes = {
    error: PropTypes.object,
    loading: PropTypes.bool,
    productList: PropTypes.array,
    addToCart: PropTypes.func,
    changeAmount: PropTypes.func,
}

export default Products;