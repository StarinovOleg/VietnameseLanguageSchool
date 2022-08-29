import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearningIndex from "./screens/learning/lesson/index";
import Home from "./screens/main/home";
import Landing from "./screens/landing";
import EndScreen from "./screens/end-screen/EndScreen.jsx";
import GlobalState from "./store/Globalstate";
function App() {
  return (
    <BrowserRouter>
      <GlobalState>
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<Landing />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/learning" element={<LearningIndex />} />
            <Route path="/endtest" element={<EndScreen />} />
          </Route>
        </Routes>
      </GlobalState>
    </BrowserRouter>
  );
}

export default App;
