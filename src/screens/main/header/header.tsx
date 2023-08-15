import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { converstation } from "../../../store/static";
import Logo from "./logo";
import ScrollToTop from "../../../services/scroll-top.service";
function Header() {
  const location = useLocation();
  return (
    <header className="p-2 text-4xl sticky top-0 w-full bg-white z-[51]">
      <div className="flex sm:justify-between md:justify-between justify-center flex-wrap">
        {location.pathname === "/words" ? (
          <Link to="/landing#words">
            <Logo />
          </Link>
        ) : location.pathname === "/audio" ? (
          <Link to="/landing#audio">
            <Logo />
          </Link>
        ) : location.pathname === "/translated" ? (
          <Link to="/landing#translate">
            <Logo />
          </Link>
        ) : location.pathname === "/grammar" ? (
          <Link to="/landing#grammar">
            <Logo />
          </Link>
        ) : (
          <NavLink to="/landing" onClick={() => ScrollToTop}>
            <Logo />
          </NavLink>
        )}

        <div className="sm:text-center">
          <Link
            to="/landing#words"
            className="mr-4  text-2xl text-sky-500 hover:text-sky-800 "
          >
            {converstation.header.words_training}
          </Link>
          <Link
            to="/landing#audio"
            className="pr-4 text-2xl text-lime-500 hover:text-lime-800 "
          >
            {converstation.header.audio_training}
          </Link>
          <Link
            to="/landing#translate"
            className="pr-4 text-2xl text-[#DA0C0C] hover:text-rose-800 "
          >
            {converstation.header.translate_training}
          </Link>
          <Link
            to="/landing#grammar"
            className="pr-4 text-2xl text-orange-500 hover:text-orange-800 "
          >
            {converstation.header.grammar_training}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
