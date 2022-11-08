import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Inputs from "./Inputs";
afterEach(cleanup);

describe("Testing Inputs.js", () => {
  beforeEach(() => {
    render(
      <Inputs
        placeholder="placeholder"
        type="text"
        labelText="label"
        spanText="error"
        required={true}
      />
    );
  });
  it("input should have the right props", () => {
    const input = screen.getByTestId("input");
    expect(input.placeholder).toBe("placeholder");
    expect(input.type).toBe("text");
  });
  it("input should have the label text", () => {
    const label = screen.getByTestId("label-input");
    expect(label).toHaveTextContent("label");
  });
  it("input should have the error text", () => {
    const error = screen.getByTestId("error-input");
    expect(error).toHaveTextContent("error");
  });
});
