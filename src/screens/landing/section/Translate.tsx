import React, { useState } from "react";
import { converstation } from "../../../store/static";
import GridSection from "../../main/section/GridSection";
import Link from "../../../ui-library/Link";
import { cardItemPracticeTranslated } from "../../practice_translated/components/List";
import SupportWindow from "../../../components/SupportWindow";
import Section from "../../main/section/Section";

const children_header = (
  <img
    src={converstation.practice_translate.section_img}
    alt="logo"
    className="w-12 h-12 ml-4 mr-4 mt-4 mb-4"
  />
);
function Translate(props: { id?: string }) {
  const [hover, setHover] = useState(false);
  const onClick = () => {
    if (!hover) setHover(true);
    else setHover(false);
  };
  return (
    <Section>
      <GridSection
        title={converstation.practice_translate.title}
        fontcolorsecondary="text-rose-700"
        id={props.id}
        children_header={children_header}
        onClick={onClick}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
          {hover && (
            <SupportWindow
              position={"absolute"}
              text={converstation.support_window.text_translate}
              color="text-rose-700"
              img={converstation.support_window.img_translate}
              shadowcolor="shadow-rose-700"
              onClick={onClick}
            />
          )}
          {cardItemPracticeTranslated.slice(0, 8)}
        </div>

        <Link
          to="/training"
          children={converstation.landing.continue}
          align="text-right pt-10"
          secondary_color="text-rose-700"
          state={{
            title: `${converstation.practice_translate.title}`,
          }}
        />
      </GridSection>
    </Section>
  );
}

export default Translate;
