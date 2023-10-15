import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Navbar from "../Components/Navbar";

describe("Navbar", () => {
    it("renders navbar", () => {
        render(<Navbar />);
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(document.getElementById("beranda").getAttribute("href")).toBe("/")
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(document.getElementById("tentang").getAttribute("href")).toBe("/tentang")
        expect(screen.getByText("Contact")).toBeInTheDocument();
        expect(document.getElementById("kontak").getAttribute("href")).toBe("/kontak")
    })
})