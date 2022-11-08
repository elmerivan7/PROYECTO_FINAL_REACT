import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MenuNav from "./MenuNav";
afterEach(cleanup);

describe("Testing MenuNav.js", () => {
  beforeEach(() => {
    render(<MenuNav tabs={["tab1", "tab2", "tab3"]} abledTabs={["tab1"]} />);
  });
  it("should be able to right amount of buttons-tabs", () => {
    const tabs = screen.getAllByTestId("button-tab");
    expect(tabs).toHaveLength(3);
  });
  it("checking if other tabs are disabled", () => {
    const tabs = screen.getAllByTestId("button-tab");
    expect(tabs[1]).toHaveAttribute("disabled");
    expect(tabs[2]).toHaveAttribute("disabled");
  });
});
