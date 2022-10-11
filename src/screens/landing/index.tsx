import React from "react";
import Promo from "./section/Promo";
import About from "./section/About";
import Method from "./section/Method";
import Lessons from "./section/Lessons";
import Conversation from "./section/Conversation";
import Baner from "./section/Baner";
function Landing() {
  return (
    <>
      <Promo />
      <Method />
      <Baner/>
      <Lessons />
      <Conversation/>
      <About />
      
    </>
  );
}

export default Landing;
