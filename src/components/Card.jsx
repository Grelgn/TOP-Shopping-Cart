import { useState } from "react";

const Card = () => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [amount, setAmount] = useState(1);

    function handleCartButton() {
        setAddedToCart(!addedToCart);
    }

    function handleAmountChange(e) {
        setAmount(e.target.value);
    }

    return (
        <>
            <div className="card">
                <img src="https://via.placeholder.com/150" alt="" />
                <h3>Item</h3>
                <p>10$</p>
                <input type="number" defaultValue={1} min={1} onChange={(e) => handleAmountChange(e)}/>
                <button onClick={handleCartButton}>
                    {addedToCart ? "Remove from Cart" : "Add to Cart"}
                </button>
                {addedToCart && <p>In Cart: {amount}</p>}
            </div>
        </>
    );
};

export default Card;