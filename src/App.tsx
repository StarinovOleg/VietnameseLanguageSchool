import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearningIndex from "./components/learning/unit_1/index.jsx";
import Home from "./components/main/home";
import Landing from "./components/landing";
import EndScreen from "./components/end-screen/EndScreen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/learning" element={<LearningIndex />} />
          <Route path="/endtest" element={<EndScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
