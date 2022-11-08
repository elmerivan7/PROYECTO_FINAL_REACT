import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Header from "./Header";
afterEach(cleanup);

describe("Testing Header.js", () => {
  beforeEach(() => {
    render(<Header description="description" title="title" />);
  });
  it("should have the description text", () => {
    const description = screen.getByTestId("description");
    expect(description).toHaveTextContent("description");
  });
  it("should have the titles component with the right text", () => {
    const title = screen.getByTestId("titles-component");
    expect(title).toHaveTextContent("title");
  });
});
