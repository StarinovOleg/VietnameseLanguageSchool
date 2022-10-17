import React from "react";
import { converstation } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";
import Section from "../../../components/Section";
import Link from "../../../ui-library/Link";
import { cardItemLesson } from "../../learning/components/Lists";


function Lessons() {
  return (
    <Section title={converstation.lessons.title} fontcolorsecondary='text-sky-800'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10">
        {cardItemLesson.slice(0, 8)}
      </div>
      <div className="m-10 relative">
        <Link to='/training' children={converstation.landing.continue} align='align-right-side' blue_color='text-sky-800'
              state={{
                title: `${converstation.lessons.title}`,
              }}
        />
      </div>
    </Section>
  );
}

export default Lessons;
