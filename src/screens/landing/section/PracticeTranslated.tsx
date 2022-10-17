import React from "react";
import { converstation } from "../../../store/static";
import CardListen from "../../../components/CardListen";
import Section from "../../../components/Section";
import Link from "../../../ui-library/Link";
import { cardItemPracticeTranslated } from "../../practice_translated/components/List";

function Conversation() {
  return (
  <Section title={converstation.practice_translate.title} fontcolorsecondary='text-rose-700'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10">
        {cardItemPracticeTranslated.slice(0, 8)}
      </div>
    <div className="m-10 relative">
      <Link to='/training' children={converstation.landing.continue} align='align-right-side' red_color='text-rose-700'
        state={{
          title: `${converstation.practice_translate.title}`,
        }}
      />
    </div>
  </Section>
  );
}

export default Conversation;