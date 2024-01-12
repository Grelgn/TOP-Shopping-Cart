import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const ShopPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Card />
                <Card />
            </main>
        </>
    );
};

export default ShopPage;