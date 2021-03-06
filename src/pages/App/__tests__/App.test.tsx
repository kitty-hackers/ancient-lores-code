import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "../App";

it("should render App", () => {
	render(<App />);

	const linkElement = screen.getByTestId("appTestId");

	expect(linkElement).toBeInTheDocument();
});
