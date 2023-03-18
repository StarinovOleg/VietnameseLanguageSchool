import React from "react";
import { converstation } from "../../../store/static";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-blue-700  bottom-0 w-full">
      <div className="text-white text-xl">
        {converstation.footer.company_name} {new Date().getFullYear()}{" "}
        {converstation.footer.web_app_name}
        <NavLink to="#" onClick={() => ScrollToTop}>
            Privacy Policy
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
