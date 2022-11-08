import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Checkbox from "./Checkbox";
afterEach(cleanup);

describe("Testing Checkbox.js", () => {
  beforeEach(() => {
    render(<Checkbox />);
  });
  it("should be able to show the input type checkbox", () => {
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox.type).toBe("checkbox");
  });
  it("should be able to show the terms text", () => {
    const terms = screen.getByTestId("terms-checkbox");
    expect(terms).toHaveTextContent("I accept the terms and privacy");
  });
});
