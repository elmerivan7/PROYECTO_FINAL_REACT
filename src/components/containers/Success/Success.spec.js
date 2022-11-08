import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Success from "./Success";
afterEach(cleanup);

describe("Testing Success.js", () => {
  beforeEach(() => {
    render(<Success />);
  });
  it("should be able to show the buttons components", () => {
    const buttons = screen.getByTestId("buttons-component");
    expect(buttons).toBeInTheDocument();
  });
});
