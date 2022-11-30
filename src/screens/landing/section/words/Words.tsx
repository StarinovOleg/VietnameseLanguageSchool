import React, { useState } from "react";
import { converstation } from "../../../../store/static";
import GridSection from "../../../main/section/GridSection";
import Link from "../../../../ui-library/Link";
import { cardItemLesson } from "./components/Lists";
import SupportWindow from "../../../../components/SupportWindow";
import Section from "../../../main/section/Section";

const children_header = (
  <img
    src={converstation.lessons.section_img}
    alt="logo"
    className="w-12 h-12 ml-4 mr-4 mt-4 mb-4"
  />
);
function Words(props: { id?: string }) {
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

export default Words;
