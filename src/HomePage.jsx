import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <h2>The Home Page</h2>
                <Link to="/shop"><button>SHOP NOW!</button></Link>
            </main>
        </>
    );
};

export default HomePage;