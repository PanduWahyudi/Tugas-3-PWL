import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Layout from "../Components/Layout";

describe("Layout", () => {
  it("renders navbar component", () => {
    render(<Layout>Test Content</Layout>);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
  it("renders children inside layout", () => {
    render(<Layout>Test Content</Layout>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
  it("renders Footer component", () => {
    render(<Layout>Test Content</Layout>);
    expect(screen.getByText("Pandu Wahyudi || 120140010")).toBeInTheDocument();
  });
});
