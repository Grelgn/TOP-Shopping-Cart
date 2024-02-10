import { useState } from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	const [addedToCart, setAddedToCart] = useState(false);
	const [amount, setAmount] = useState(1);

	function handleCartButton() {
		setAddedToCart(!addedToCart);
		props.addToCart(props.data.title, amount);
	}

	function handleAmountChange(e) {
		setAmount(parseInt(e.target.value));
		props.changeAmount(props.data.title, parseInt(e.target.value));
	}

	return (
		<>
			<div className="card">
				<img src={props.data.image} alt="" />
				<h2>{props.data.title}</h2>
				<p>{props.data.category}</p>
				<h3>{props.data.price}$</h3>
				<p>{props.data.description}</p>
				<p>{props.data.rating.rate}</p>
				<p>{props.data.rating.count}</p>
				<input
					type="number"
					defaultValue={1}
					min={1}
					onChange={(e) => handleAmountChange(e)}
				/>
				<button onClick={handleCartButton}>
					{addedToCart ? "Remove from Cart" : "Add to Cart"}
				</button>
				{addedToCart && <p>In Cart: {amount}</p>}
			</div>
		</>
	);
};

Card.propTypes = {
	data: PropTypes.object,
	addToCart: PropTypes.func,
	changeAmount: PropTypes.func,
};

export default Card;
