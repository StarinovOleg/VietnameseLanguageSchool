import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
function Header() {
  return (
    <header className="p-2 text-4xl sticky top-0 w-full bg-white z-50">
      <div className="flex sm:justify-between md:justify-between justify-center flex-wrap">
        <NavLink to="/landing">
          <div className="flex leading-12 ">
         
            <div className="m-1">
              <span className="text-blue-700">P</span>
              <span className="text-green-500 ">i</span>
              <span className="text-yellow-500 font-semibold">o</span>
              <span className="text-teal-500">n</span>
              <span className="text-red-500 text-5xl leading-8">ee</span>
              <span className="text-pink-900">r</span>
              <span className="text-fuchsia-800 text-5xl leading-8">s</span>
            </div>
          </div>
        </NavLink>
        <div className="sm:text-center">

          <Link to="/landing#words" className="mr-4  text-2xl text-[#1572E0] hover:text-blue-800 ">words</Link>
          <Link to="/landing#audio" className="pr-4 text-2xl text-[#529312] hover:text-lime-800 ">audio</Link>
          <Link to="/landing#translate" className="pr-4 text-2xl text-[#DA0C0C] hover:text-rose-800 ">translate</Link>
        </div> 

      </div>
      
    </header>
  );
}

export default Header;
