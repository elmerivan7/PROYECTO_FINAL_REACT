import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Buttons from "./Buttons";

afterEach(cleanup);

describe("Testing Buttons.js", () => {
  it("should be able to show the right imgs on button type 0", () => {
    render(<Buttons type={0} />);
    const imgTwo = screen.getByTestId("imgTwo");
    expect(imgTwo.src).toContain("next");
  });
  it("should be able to show the right imgs on button type 1", () => {
    render(<Buttons type={1} />);
    const imgOne = screen.getByTestId("imgOne");
    const imgTwo = screen.getByTestId("imgTwo");
    expect(imgOne.src).toContain("plus");
    expect(imgTwo.src).toContain("next");
  });
  it("should be able to show the right imgs on button type 1", () => {
    render(<Buttons type={2} />);
    const imgOne = screen.getByTestId("imgOne");
    expect(imgOne.src).toContain("check");
  });
  it("should be able to show the right imgs on button type 1", () => {
    render(<Buttons type={3} />);
    const imgTwo = screen.getByTestId("imgTwo");
    expect(imgTwo.src).toContain("vector");
  });
});
