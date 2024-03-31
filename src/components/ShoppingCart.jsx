import PropTypes from "prop-types";

const ShoppingCart = (props) => {
	let totalAmount = 0;
	let totalPrice = 0;

	return (
		<aside>
			<h2>Shopping Cart</h2>
			<div>
				{props.cart.map(function (cart, i) {
					totalAmount += cart.amount;
					totalPrice += cart.amount * cart.price;

					return (
						<div key={i}>
							<p>{cart.name}</p>
							Amount: <b>{cart.amount}</b>
							<br />
							Price: <b>${cart.price}</b>
						</div>
					);
				})}
				{totalAmount > 0 && (
					<div>
						<h3>
							Subtotal ({totalAmount} items): ${totalPrice.toFixed(2)}
						</h3>
						<button>Proceed to checkout</button>
					</div>
				)}
			</div>
		</aside>
	);
};

ShoppingCart.propTypes = {
	cart: PropTypes.array,
};

export default ShoppingCart;
