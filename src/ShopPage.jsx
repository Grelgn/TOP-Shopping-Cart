import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const ShopPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <h2>The Shop Page</h2>
                <Card />
            </main>
        </>
    );
};

export default ShopPage;