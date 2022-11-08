import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Titles from "./Titles";
afterEach(cleanup);

describe("Testing Titles.js", () => {
  beforeEach(() => {
    render(<Titles title="title test" />);
  });
  it("should be able to show the title with the right text", () => {
    const title = screen.getByTestId("titles-component");
    expect(title).toHaveTextContent("title test");
  });
});
