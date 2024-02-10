import { Link } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const HomePage = () => {
	return (
		<>
			<Header />
			<Navbar />
			<main>
				<h2>Our products are awesome!</h2>
				<p>
					This is the best place to buy your stuff! Best quality products now
					made available online!
				</p>
				<img src="https://via.placeholder.com/500x250" alt="" />
				<p>These are just a few examples of the awesome things you can buy!</p>
				<Link to="/shop">
					<button>SHOP NOW!</button>
				</Link>
			</main>
		</>
	);
};

export default HomePage;
