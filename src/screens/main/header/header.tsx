import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
function Header() {
  return (
    <header className="p-2 text-4xl  ">
      <div className="first-letter:text-blue-700 second-letter:text-blue-700">
        <NavLink to="/landing">
          <div className="flex leading-12 ">
            <img src={logo} className="w-12 " alt="logo" />
            <div className="m-1">
              <span className="text-white">P</span>
              <span className="text-green-500 ">i</span>
              <span className="text-yellow-500 font-semibold">o</span>
              <span className="text-teal-500">n</span>
              <span className="text-red-500 text-5xl leading-8">ee</span>
              <span className="text-pink-900">r</span>
              <span className="text-fuchsia-800 text-5xl leading-8">s</span>
            </div>
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
