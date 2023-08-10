import React from "react";
import { converstation } from "../../../store/static";
import H2 from "../../../ui-library/H2";
import Section from "../../main/section/Section";

const static_data_list = converstation.mobile_advise.group1.item.map(
  (item: { text: string }) => (
    <div className="px-2 py-4" key={item.text}>
      <p className=" text-xl text-stone-500 font-semibold">- {item.text}</p>
    </div>
  )
);
function MobileAdvise() {
  return (
    <Section>
      <div className="text-center pt-20">
        <H2
          children={converstation.mobile_advise.group1.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
          fontcolorsecondary="text-yellow-500"
        />
      </div>
      <div className=" content pt-10">
        <div className="">{static_data_list}</div>
        <img
          src={converstation.mobile_advise.img}
          alt="picture teacher display vietnamese and english words"
          className=" md:mt-auto md:mb-auto w-10/12 ml-auto mr-auto"
          loading="lazy"
        />
      </div>
    </Section>
  );
}

export default MobileAdvise;
