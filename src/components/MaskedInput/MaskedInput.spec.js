import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MaskedInput from "./MaskedInput";
afterEach(cleanup);

describe("Testing MaskedInput.js", () => {
  beforeEach(() => {
    render(<MaskedInput />);
  });
  it("should be able to show the label ", () => {
    const label = screen.getByTestId("label-maskedInput");
    expect(label).toHaveTextContent("Phone");
  });
  it("should be able to show the error ", () => {
    const error = screen.getByTestId("error-maskedinput");
    expect(error).toHaveTextContent("Invalid Number");
  });
});
