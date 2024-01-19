import PropTypes from "prop-types";

const ShoppingCart = (props) => {
    return (
        <aside>
            <h2>Shopping Cart</h2>
            {props.cart.map(function(cart, i){
                return <p key={i}>{cart.name} <b>{cart.amount}</b></p>
            })}
        </aside>
    );
};

ShoppingCart.propTypes = {
    cart: PropTypes.array,
}

export default ShoppingCart;