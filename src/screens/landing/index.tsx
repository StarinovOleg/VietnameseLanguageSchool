import React from "react";
import Promo from "./section/Promo";
import About from "./section/About";
import Method from "./section/Method";
import Lessons from "./section/Lessons";
import Conversation from "./section/Conversation";
import Baner from "./section/Baner";
import PracticeTranslated from "./section/PracticeTranslated";
import DemoAudio from "./section/demo-audio";
import DemoTest from "./section/demo-test";
function Landing() {
  return (
    <>
      <Promo />    
      <DemoAudio id='demo_audio'/>
      <Baner />
      <Method />
      <Lessons id='words'/>
      <Conversation id='audio'/>
      <PracticeTranslated id='translate'/>
      <DemoTest id='demo_test'/>
      <About />
    </>
  );
}

export default Landing;
