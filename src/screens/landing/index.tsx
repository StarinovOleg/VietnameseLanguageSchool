import React from "react";
import Promo from "./section/Promo";
import About from "./section/About";
import Phone from "./section/Phone";
import Lessons from "./section/Lessons";
function Landing() {
  return (
    <>
      <Promo />
      <Lessons />
      <About />
      <Phone />
    </>
  );
}

export default Landing;
