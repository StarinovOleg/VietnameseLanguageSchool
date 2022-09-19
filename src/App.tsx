import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearningIndex from "./screens/learning/lesson/index.jsx";
import ConversationIndex from "./screens/conversation";
import Home from "./screens/main/home";
import Landing from "./screens/landing";
import EndScreen from "./screens/end-screen/EndScreen";
import GlobalState from "./store/Globalstate";
import ScrollToTop from "./services/scroll-top.service";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalState>
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<Landing />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/learning" element={<LearningIndex />} />
            <Route path="/conversation" element={<ConversationIndex />} />
            <Route path="/endtest" element={<EndScreen />} />
          </Route>
        </Routes>
      </GlobalState>
    </BrowserRouter>
  );
}

export default App;
