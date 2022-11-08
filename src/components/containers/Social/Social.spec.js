import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Social from "./Social";
afterEach(cleanup);

describe("Testing Social.js", () => {
  beforeEach(() => {
    render(<Social />);
  });
  it("should be able to show the inputs components", () => {
    const inputs = screen.getAllByTestId("inputs-component");
    expect(inputs).toHaveLength(2);
  });
  it("should be able to show the buttons components", () => {
    const buttons = screen.getByTestId("buttons-component");
    expect(buttons).toBeInTheDocument();
  });
});
