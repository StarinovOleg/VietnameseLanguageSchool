import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
function Home() {
  return (
    <div className="min-h-screen bg-background-promo bg-no-repeat hover:bg-top  bg-top h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
