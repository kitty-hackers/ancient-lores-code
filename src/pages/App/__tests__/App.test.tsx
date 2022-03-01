import { render, screen } from "@testing-library/react";
import { App } from "../App";

it("should render App", () => {
	render(<App />);

	const linkElement = screen.getByTestId("appTestId");

	expect(linkElement).toBeInTheDocument();
});
