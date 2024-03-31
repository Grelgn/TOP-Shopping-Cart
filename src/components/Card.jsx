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
				<p>
					<b>Category: </b>
					{props.data.category}
				</p>
				<img className="card-img" src={props.data.image} alt="" />
				<h2 className="card-h">{props.data.title}</h2>

				
				<p>{props.data.description}</p>

				<div>
					<h2>{props.data.price}$</h2>
					<h3>
						{props.data.rating.rate} &#11088; ({props.data.rating.count})
					</h3>
				</div>

				<div>
					<input
						type="number"
						defaultValue={1}
						min={1}
						onChange={(e) => handleAmountChange(e)}
					/>
					<button onClick={handleCartButton}>
						{addedToCart ? "Remove from Cart" : "Add to Cart"}
					</button>
				</div>
				{addedToCart && <p className="in-cart">In Cart: {amount}</p>}
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
