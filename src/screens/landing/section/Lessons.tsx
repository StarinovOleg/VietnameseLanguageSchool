import React from "react";
import { lessons } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";

function Lessons() {
  return (
    <>
      <div className="md:mx-10 sm:mx-auto mt-20">
        <H2
          children="Chose lesson for training"
          fontsizeprimary="h2-font-ize-primary"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 h-screen m-10">
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
    </>
  );
}

export default Lessons;
