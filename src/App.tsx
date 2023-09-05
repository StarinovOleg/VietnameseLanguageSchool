import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/main/home";
import Landing from "./screens/landing";
import GlobalState from "./store/Globalstate";
import ScrollToTop from "./services/scroll-top.service";
import DictionaryIndex from "./screens/dictionary";
import Adjectives from "./modules/module-grammar/lesson-grammar/adjectives";
import Adverbs from "./modules/module-grammar/lesson-grammar/adverbs";
import Alphabet from "./modules/module-grammar/lesson-grammar/alphabet/alphabet";
import CommonQuestions from "./modules/module-grammar/lesson-grammar/common_questions";
import Comparison from "./modules/module-grammar/lesson-grammar/comparison";
import FromYearToDay from "./modules/module-grammar/lesson-grammar/from_year_to_day";
import Noun from "./modules/module-grammar/lesson-grammar/noun";
import Numerals from "./modules/module-grammar/lesson-grammar/numerals";
import Particles from "./modules/module-grammar/lesson-grammar/particles";
import Phonetics from "./modules/module-grammar/lesson-grammar/phonetics";
import Time from "./modules/module-grammar/lesson-grammar/time";
import Verbs from "./modules/module-grammar/lesson-grammar/verbs";
import WhoIsIt from "./modules/module-grammar/lesson-grammar/who_is_it ";
import SimpleSentenceAndQuestions from "./modules/module-grammar/lesson-grammar/simple_sentence_and_questions";
import ThePersonalPronouns from "./modules/module-grammar/lesson-grammar/the_personal_pronouns";
import PhoneticsIndex from "./modules/module-phonetics";

const WordsIndex = lazy(() => import("./screens/words/index"));
const AudioIndex = lazy(() => import("./screens/audio/index"));
const TranslateIndex = lazy(() => import("./screens/translate/index"));
const Error = lazy(() => import("./screens/main/error/Error"));
const EndScreen = lazy(() => import("./screens/end-screen/EndScreen"));
const ListLessons = lazy(() => import("./screens/all-lesson"));
const PrivacyPolicy = lazy(() => import("./screens/PrivacyPolicy"));
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <GlobalState>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Home />}>
              <Route path="/" element={<Landing />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/words" element={<WordsIndex />} />
              <Route
                path="/listlessons/:identificator"
                element={<ListLessons />}
              />
              <Route path="/audio" element={<AudioIndex />} />
              <Route path="/dictionary" element={<DictionaryIndex />} />
              <Route path="/phonetics" element={<PhoneticsIndex />} />

              <Route path="/Alphabet" element={<Alphabet />} />
              <Route path="/Numerals" element={<Numerals />} />
              <Route path="/CommonQuestions" element={<CommonQuestions />} />
              <Route path="/WhoIsIt" element={<WhoIsIt />} />
              <Route path="/Noun" element={<Noun />} />
              <Route path="/Particles" element={<Particles />} />
              <Route path="/Adjectives" element={<Adjectives />} />
              <Route path="/Comparison" element={<Comparison />} />
              <Route path="/Adverbs" element={<Adverbs />} />
              <Route path="/FromYearToDay" element={<FromYearToDay />} />
              <Route path="/Phonetics_Tone" element={<Phonetics />} />
              <Route path="/Time" element={<Time />} />
              <Route path="/Verbs" element={<Verbs />} />
              <Route
                path="SimpleSentenceAndQuestions"
                element={<SimpleSentenceAndQuestions />}
              />
              <Route
                path="ThePersonalPronouns"
                element={<ThePersonalPronouns />}
              />

              <Route path="/translated" element={<TranslateIndex />} />
              <Route path="/endtest" element={<EndScreen />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Suspense>
      </GlobalState>
    </BrowserRouter>
  );
}

export default App;
