import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

const ShopPage = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [productList, setProductList] = useState();
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/", { mode: "cors" })
			.then((res) => res.json())
			.then((json) => setProductList(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	function addToCart(name, amount) {
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].name == name) {
				// Remove from cart
				const cartRemovedItem = cart.filter((_, index) => index !== i);
				setCart(cartRemovedItem);
				return;
			}
		}
		setCart((c) => [...c, { name: name, amount: amount }]);
	}

	function changeAmount(name, amount) {
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].name == name) {
				let items = [...cart];
				let item = {
					...cart[i],
					amount: amount,
				};
				items[i] = item;

				setCart(items);
			}
		}
	}

	return (
		<>
			<Header />
			<Navbar />
			<Products
				error={error}
				loading={loading}
				productList={productList}
				addToCart={addToCart}
				changeAmount={changeAmount}
			/>
			<ShoppingCart cart={cart} />
		</>
	);
};

export default ShopPage;
