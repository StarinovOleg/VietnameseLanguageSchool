import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
