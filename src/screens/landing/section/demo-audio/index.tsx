import React from "react";
import H2 from "../../../../ui-library/H2";
import { converstation } from "../../../../store/static";
import CardDemoAudio from "./CardDemoAudio";
import Link from "../../../../ui-library/Link";
import Section from "../../../main/section/Section";

const DemoAudio = (props: { id?: string }) => {
  const cardItem = converstation.demo_audio.item.map((item, index) => (
    <CardDemoAudio
      text={item.name}
      color={item.color}
      key={index}
      item={item.audio}
    />
  ));

  return (
    <Section>
      <div className="text-center pt-20" id={props.id}>
        <H2
          children={converstation.demo_audio.subtitle}
          fontsizeprimary="leading-[3rem] lg:h2-font-size-primary  sm:h2-font-size-secondary"
          fontcolorsecondary="text-[#00AA88]"
          fontfamilysecondary="font-['KGLifeisMessy']"
        />

        <div className="flex flex-wrap justify-center">{cardItem}</div>

        <Link
          children={converstation.landing.continue}
          align="text-right"
          identificator="phonetics"
          secondary_color="text-[#00AA88]"
        />
      </div>
    </Section>
  );
};
export default DemoAudio;
