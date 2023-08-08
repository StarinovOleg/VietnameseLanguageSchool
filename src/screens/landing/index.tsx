import React from "react";
import Promo from "./section/Promo";
import About from "./section/About";
import Method from "./section/Method";
import Words from "./section/words/Words";
import Audio from "./section/audio/Audio";
import Baner from "./section/Baner";
import Translate from "./section/translate/Translate";
import DemoAudio from "./section/demo-audio";
import DemoTest from "./section/demo-test";
import PromoMethod from "./section/PromoMethod";
function Landing() {
  return (
    <>
      <Promo />
      <Baner />
      <PromoMethod />
      <DemoAudio id="demo_audio" />
      <Method />
      <Words id="words" />
      <Audio id="audio" />
      <Translate id="translate" />
      <DemoTest id="demo_test" />
      <About />
    </>
  );
}

export default Landing;
