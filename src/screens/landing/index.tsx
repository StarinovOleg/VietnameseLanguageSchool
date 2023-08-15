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
import Dictionary from "./section/Dictionary";
import MobileAdvise from "./section/MobileAdvise";
import GrammarLesson from "../../modules/module-grammar/components-grammar/GrammarLesson";
function Landing() {
  return (
    <>
      <Promo />
      <Baner />
      <PromoMethod />
      <DemoAudio id="demo_audio" />
      <Dictionary />
      <Method />
      <Words id="words" />
      <Audio id="audio" />
      <GrammarLesson id="grammar" />
      <Translate id="translate" />
      <DemoTest id="demo_test" />
      <MobileAdvise />
      <About />
    </>
  );
}

export default Landing;
