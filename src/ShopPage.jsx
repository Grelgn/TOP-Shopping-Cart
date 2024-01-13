import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const ShopPage = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/", { mode: "cors" })
            .then(res=>res.json())
            .then(json=>setProductList(json))
            .catch((error) => setError(error))
			.finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Products error={error} loading={loading} productList={productList}/>
            </main>
        </>
    );
};

export default ShopPage;