import PropTypes from "prop-types";
import Card from "./Card";

const Products = (props) => {
	if (props.error) return <p>A network error was encountered</p>;
	if (props.loading) return <p>Loading...</p>;

	return (
		<div className="products">
			<Card
				data={props.productList[0]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[1]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[2]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[3]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[4]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[6]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[8]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[11]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[12]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[13]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[15]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[16]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[17]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[18]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
			<Card
				data={props.productList[19]}
				addToCart={props.addToCart}
				changeAmount={props.changeAmount}
			/>
		</div>
	);
};

Products.propTypes = {
	error: PropTypes.object,
	loading: PropTypes.bool,
	productList: PropTypes.array,
	addToCart: PropTypes.func,
	changeAmount: PropTypes.func,
};

export default Products;
