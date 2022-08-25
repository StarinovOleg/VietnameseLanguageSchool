import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white p-2 text-4xl ">
      <div className="first-letter:text-blue-700 second-letter:text-blue-700">
        <NavLink to="/landing">
          P<span className="text-green-500 ">i</span>
          <span className="text-yellow-500 font-semibold">o</span>
          <span className="text-teal-500">n</span>
          <span className="text-red-500 text-5xl">ee</span>
          <span className="text-pink-900">r</span>
          <span className="text-fuchsia-800 text-5xl">s</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
