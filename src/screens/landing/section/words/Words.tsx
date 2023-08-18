import React, { useState } from "react";
import { useToggle } from "../../../../hooks/useToggle";
import { converstation } from "../../../../store/static";
import GridSection from "../../../main/section/GridSection";
import Link from "../../../../ui-library/Link";
import Lists from "./components/Lists";
import SupportWindow from "../../../../components/SupportWindow";
import Section from "../../../main/section/Section";

const children_header = (
  <img
    src={converstation.words.section_img}
    alt="logo"
    className="w-6 h-6 ml-4 mr-4 mt-[65%] mb-4"
  />
);
function Words(props: { id?: string }) {
  const [hover, setHover] = useToggle(false);

  return (
    <Section>
      <GridSection
        title={converstation.words.title}
        fontcolorsecondary="text-sky-800"
        id={props.id}
        children_header={children_header}
        onClick={setHover}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 ">
          {hover && (
            <SupportWindow
              position={"absolute"}
              text={converstation.support_window.text_word}
              color="text-[#075985]"
              img={converstation.support_window.img_word}
              shadowcolor="shadow-cyan-500/50"
              onClick={setHover}
            />
          )}
          <Lists />
        </div>

        <Link
          children={converstation.landing.continue}
          align="text-right"
          secondary_color="text-sky-800"
          identificator="words"
          state={{
            title: `${converstation.words.title}`,
          }}
        />
      </GridSection>
    </Section>
  );
}

export default Words;
