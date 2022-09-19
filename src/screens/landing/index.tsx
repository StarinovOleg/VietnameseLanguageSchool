import React from "react";
import Promo from "./section/Promo";
import About from "./section/About";
import Phone from "./section/Phone";
import Lessons from "./section/Lessons";
import Conversation from "./section/Conversation";
import Baner from "./section/Baner";
function Landing() {
  return (
    <>
      <Promo />
      <Baner/>
      <Lessons />
      <Conversation/>
      <About />
      <Phone />
    </>
  );
}

export default Landing;
