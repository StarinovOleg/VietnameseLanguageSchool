import React from "react";
import Promo from "./section/Promo";
import About from "./section/About";
import Method from "./section/Method";
import Lessons from "./section/lessons/Lessons";
import Audio from "./section/Audio";
import Baner from "./section/Baner";
import Translate from "./section/Translate";
import DemoAudio from "./section/demo-audio";
import DemoTest from "./section/demo-test";
function Landing() {
  return (
    <>
      <Promo />
      <Baner />
      <DemoAudio id="demo_audio" />
      <Method />
      <Lessons id="words" />
      <Audio id="audio" />
      <Translate id="translate" />
      <DemoTest id="demo_test" />
      <About />
    </>
  );
}

export default Landing;
