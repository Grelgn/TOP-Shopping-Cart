import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "shop/",
			element: <ShopPage />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
