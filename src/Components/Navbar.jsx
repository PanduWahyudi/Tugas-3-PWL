import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="bg-mid-purple w-full flex justify-center p-4 fixed">
        <div className="w-1/4 flex justify-between">
          <a
            href="/"
            className={`text-lg ${
              location.pathname === "/" ? "font-bold" : ""
            } text-white`}
            id="beranda"
          >
            Home
          </a>
          <a
            href="/tentang"
            className={`text-lg ${
              location.pathname === "/tentang" ? "font-bold" : ""
            } text-white`}
            id="tentang"
          >
            About
          </a>
          <a
            href="/kontak"
            className={`text-lg ${
              location.pathname === "/kontak" ? "font-bold" : ""
            } text-white`}
            id="kontak"
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}
export default Navbar;
