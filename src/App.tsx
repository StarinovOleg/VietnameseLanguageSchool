import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WordsIndex from "./screens/words/index";
import AudioIndex from "./screens/audio";
import TranslateIndex from "./screens/translate";
import Home from "./screens/main/home";
import Landing from "./screens/landing";
import EndScreen from "./screens/end-screen/EndScreen";
import GlobalState from "./store/Globalstate";
import ScrollToTop from "./services/scroll-top.service";
import ListLessons from "./screens/all-lesson";
import Error from "./screens/main/error/Error";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalState>
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<Landing />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/words" element={<WordsIndex />} />
            <Route path="/listlessons" element={<ListLessons />} />
            <Route path="/audio" element={<AudioIndex />} />
            <Route path="/translated" element={<TranslateIndex />} />
            <Route path="/endtest" element={<EndScreen />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </GlobalState>
    </BrowserRouter>
  );
}

export default App;
