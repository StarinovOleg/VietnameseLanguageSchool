import React from "react";
import Promo from "./section/Promo";
import About from "./section/About";
import Method from "./section/Method";
import Lessons from "./section/Lessons";
import Conversation from "./section/Conversation";
import Baner from "./section/Baner";
import PracticeTranslated from "./section/PracticeTranslated";
import DemoAudio from "../../components/demo-audio";
function Landing() {
  return (
    <>
      <Promo />
      <DemoAudio/>
      <Method />
      <Baner />
      <Lessons id='words'/>
      <Conversation id='audio'/>
      <PracticeTranslated id='translate'/>
      <About />
    </>
  );
}

export default Landing;
