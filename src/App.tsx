import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/main/home";
import Landing from "./screens/landing";
import GlobalState from "./store/Globalstate";
import ScrollToTop from "./services/scroll-top.service";

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
              <Route path="/listlessons" element={<ListLessons />} />
              <Route path="/audio" element={<AudioIndex />} />
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
