import "./App.css";
import React from "react";
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import LearningIndex from "../src/components/learning/index.jsx";
function App() {
  return (
    <>
      <Header />
      <LearningIndex />
      <Footer />
    </>
  );
}

export default App;
