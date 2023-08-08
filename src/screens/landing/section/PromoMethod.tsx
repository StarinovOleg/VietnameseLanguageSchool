import React from "react";
import { converstation } from "../../../store/static";
import H2 from "../../../ui-library/H2";
import Section from "../../main/section/Section";

function PromoMethod() {
  return (
    <Section>
      <div className="text-center pt-20">
        <H2
          children={converstation.promo_method.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
          fontcolorsecondary="text-yellow-500"
        />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 content pt-20">
        <img
          src={converstation.promo_method.img}
          alt="picture teacher display vietnamese and english words"
          className=" md:mt-auto md:mb-auto w-10/12 ml-auto mr-auto"
          loading="lazy"
        />
        <div className="">
          <div className="flex m-10 ">
            <div className="px-2 py-4 ">
              <p className="text-xl text-stone-500 font-semibold">
                {converstation.promo_method.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PromoMethod;
