import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Basic from "./Basic";
afterEach(cleanup);

describe("Testing Basic.js", () => {
  beforeEach(() => {
    render(<Basic />);
  });
  it("should be able to show the inputs components", () => {
    const inputs = screen.getAllByTestId("inputs-component");
    expect(inputs).toHaveLength(3);
  });
  it("should be able to show the masked input component", () => {
    const masked = screen.getByTestId("maskedInput-component");
    expect(masked).toBeInTheDocument();
  });
  it("should be able to show the birthday component", () => {
    const birthday = screen.getByTestId("birthday-component");
    expect(birthday).toBeInTheDocument();
  });
  it("should be able to show the checkbox component", () => {
    const checkbox = screen.getByTestId("checkbox-component");
    expect(checkbox).toBeInTheDocument();
  });
  it("should be able to show the buttons component", () => {
    const buttons = screen.getByTestId("buttons-component");
    expect(buttons).toBeInTheDocument();
  });
});
