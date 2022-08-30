import React from "react";
import { lessons } from "../../../store/static";
import Card from "../../../components/Card";

function Lessons() {
  return (
    <div className="grid grid-cols-4 gap-4 bg-background-cards bg-no-repeat bg-top hover:bg-top h-52 ">
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
  );
}

export default Lessons;
