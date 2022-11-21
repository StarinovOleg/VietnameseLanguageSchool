import React, { useState } from "react";
import { converstation } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";
import GridSection from "../../main/section/GridSection";
import Link from "../../../ui-library/Link";
import { cardItemLesson } from "./lessons/Lists";
import SupportWindow from "../../../components/SupportWindow";
import Section from "../../main/section/Section";

const children_header = (
  <img
    src={converstation.lessons.section_img}
    alt="logo"
    className="w-24 h-24 ml-4 mr-4"
  />
);
function Lessons(props: { id?: string }) {
  const [hover, setHover] = useState(false);

  const onClick = () => {
    if (!hover) setHover(true);
    else setHover(false);
  };
  return (
    <Section>
      <GridSection
        title={converstation.lessons.title}
        fontcolorsecondary="text-sky-800"
        id={props.id}
        children_header={children_header}
        onClick={onClick}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 ">
          {hover && (
            <SupportWindow
              position={"absolute"}
              text={converstation.support_window.text_word}
              color="text-[#075985]"
              img={converstation.support_window.img_word}
              shadowcolor="shadow-cyan-500/50"
              onClick={onClick}
            />
          )}
          {cardItemLesson.slice(0, 8)}
        </div>

        <Link
          to="/training"
          children={converstation.landing.continue}
          align="text-right"
          secondary_color="text-sky-800"
          state={{
            title: `${converstation.lessons.title}`,
          }}
        />
      </GridSection>
    </Section>
  );
}

export default Lessons;
