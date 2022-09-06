import React from "react";
import { lessons } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";

function Lessons() {
  return (
    <div className="h-screen">
      <div className="md:mx-10 sm:mx-auto mt-20">
        <H2
          children="Chose group words for training"
          fontsizeprimary="h2-font-ize-primary"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10">
        <Card
          to="/learning"
          state={{
            title: `${lessons.lesson_1.title}`,
            subtitle: `${lessons.lesson_1.subtitle}`,
          }}
          title={lessons.lesson_1.title}
          subtitle={lessons.lesson_1.subtitle}          
        />
        <Card
          to="/learning"
          state={{
            title: `${lessons.lesson_1_1.title}`,
            subtitle: `${lessons.lesson_1_1.subtitle}`,
          }}
          title={lessons.lesson_1_1.title}
          subtitle={lessons.lesson_1_1.subtitle}          
        />
        <Card
          to="/learning"
          state={{
            title: `${lessons.lesson_2.title}`,
            subtitle: `${lessons.lesson_2.subtitle}`,
          }}
          subtitle={lessons.lesson_2.subtitle}   
          title={lessons.lesson_2.title}
        />
        <Card
          to="/learning"
          state={{
            title: `${lessons.lesson_2_2.title}`,
            subtitle: `${lessons.lesson_2_2.subtitle}`,
          }}
          subtitle={lessons.lesson_2_2.subtitle}   
          title={lessons.lesson_2_2.title}
        />
        <Card
          to="/learning"
          state={{
            title: `${lessons.lesson_2_3.title}`,
            subtitle: `${lessons.lesson_2_3.subtitle}`,
          }}
          subtitle={lessons.lesson_2_3.subtitle}   
          title={lessons.lesson_2_3.title}
        />
      </div>
    </div>
  );
}

export default Lessons;