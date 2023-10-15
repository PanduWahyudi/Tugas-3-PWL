import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Footer from "../Components/Footer";

describe("Footer", () => {
  it("renders Footer", () => {
    render(<Footer/>)
    expect(screen.getByText("Pandu Wahyudi || 120140010")).toBeInTheDocument();
  })
})
