import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Birthday from "./Birthday";
afterEach(cleanup);

describe("Testing Birthday.js", () => {
  beforeEach(() => {
    render(<Birthday />);
  });
  it("should be able to show the days select", () => {
    const days = screen.getByTestId("days-select");
    expect(days).toBeInTheDocument();
  });
  it("should be able to show the months select", () => {
    const months = screen.getByTestId("months-select");
    expect(months).toBeInTheDocument();
  });
  it("should be able to show the years select", () => {
    const years = screen.getByTestId("years-select");
    expect(years).toBeInTheDocument();
  });
  it("should be able to show the age input", () => {
    const age = screen.getByTestId("age-display");
    expect(age).toBeInTheDocument();
  });
  it("should be able to show the right amount of days options", () => {
    const days = screen.getAllByTestId("days-options");
    expect(days).toHaveLength(31);
  });
  it("should be able to show the right amount of months options", () => {
    const months = screen.getAllByTestId("months-options");
    expect(months).toHaveLength(12);
  });
  it("should be able to show the right amount of years options", () => {
    let date = new Date();
    let year = date.getFullYear();
    let rangeYears = year - 1910 + 1;
    const years = screen.getAllByTestId("years-options");
    expect(years).toHaveLength(rangeYears);
  });
});
