import PropTypes from "prop-types";
import Card from "./Card";

const Products = (props) => {
    if (props.error) return <p>A network error was encountered</p>;
	if (props.loading) return <p>Loading...</p>;

    return (
        <>
            <Card data={props.productList[0]}/>
        </>
    );
};

Products.propTypes = {
    error: PropTypes.object,
    loading: PropTypes.bool,
    productList: PropTypes.array,
}

export default Products;