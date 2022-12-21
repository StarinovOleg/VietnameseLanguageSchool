import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import { converstation } from "../../../store/static";
import Section from "../../main/section/Section";
const cardItem = converstation.method.group1.item.map((item, index) => (
  <div
    className="p-10 h-auto  flex lg:flex-nowrap flex-wrap justify-center"
    key={index}
  >
    <img
      src={converstation.method.img}
      alt="logo"
      className="w-12 h-12 mt-4 "
    />
    {index == 1 ? (
      <img
        src={converstation.method.img}
        alt="logo"
        className="w-12 h-12 mt-4 "
      />
    ) : null}
    {index == 2 ? (
      <>
        <img
          src={converstation.method.img}
          alt="logo"
          className="w-12 h-12 mt-4 "
        />
        <img
          src={converstation.method.img}
          alt="logo"
          className="w-12 h-12 mt-4 "
        />
      </>
    ) : null}
    <p className="text-xl text-stone-500 font-semibold mt-6">{item.text}</p>
  </div>
));
function Method() {
  return (
    <Section>
      <div className="text-center pt-20">
        <H2
          children={converstation.method.group1.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
          fontcolorsecondary="text-yellow-500"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
          {cardItem}
        </div>
      </div>
    </Section>
  );
}

export default Method;
