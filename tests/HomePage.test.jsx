// App.test.jsx

import { render, screen } from "@testing-library/react";
import HomePage from "../src/HomePage";

describe("App component", () => {
	it("renders correct heading", () => {
		render(<HomePage />);
		expect(screen.getByRole("heading").textContent).toMatch(/the home page/i);
	});
});
