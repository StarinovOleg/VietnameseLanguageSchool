import React from "react";

import { lessons } from "../../store/static";
import Card from "../../components/Card";
import Promo from "./section/Promo";
import About from "./section/About";
function Landing() {
  return (
    <>
      <Promo />
      <div className="grid grid-cols-4 gap-4 ">
        <Card
          picture="1"
          to="/learning"
          state={{
            title: `${lessons.lesson_1.title}`,
          }}
          title={lessons.lesson_1.title}
        />
        <Card
          picture="2"
          to="/learning"
          state={{
            title: `${lessons.lesson_2.title}`,
          }}
          title={lessons.lesson_2.title}
        />
      </div>
      <About />
    </>
  );
}

export default Landing;
