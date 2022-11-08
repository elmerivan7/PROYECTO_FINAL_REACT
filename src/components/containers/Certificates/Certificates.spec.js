import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Certificates from "./Certificates";
afterEach(cleanup);

describe("Testing Certificates.js", () => {
  beforeEach(() => {
    render(<Certificates />);
  });
  it("should be able to show the inputs components", () => {
    const inputs = screen.getAllByTestId("inputs-component");
    expect(inputs).toHaveLength(4);
  });
  it("should be able to show the buttons components", () => {
    const buttons = screen.getAllByTestId("buttons-component");
    expect(buttons).toHaveLength(3);
  });
});
