import React from "react";
import { NavLink } from "react-router-dom";
import { converstation } from "../../../store/static";
import H2 from "../../../ui-library/H2";
import Link from "../../../ui-library/Link";
import Section from "../../main/section/Section";

function Dictionary() {
  const countWords = converstation.words.lessons.reduce(function (
    tot: any,
    arr: { array_data: any }
  ) {
    return tot + arr.array_data.length;
  },
  0);
  return (
    <Section>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 content pt-20">
        <div className="m-auto">
          <div className="flex ml-10">
            <div className="py-4 ">
              <H2
                children={`${
                  converstation.dictionary.words_count + countWords
                } words`}
                fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
                fontcolorsecondary="text-yellow-500"
              />

              <Link
                children={converstation.landing.continue}
                align=""
                secondary_color="text-yellow-800"
                state={{
                  title: `${converstation.dictionary.title}`,
                }}
              />
            </div>
          </div>
        </div>
        <img
          src={converstation.dictionary.img}
          alt="picture teacher display vietnamese and english words"
          className=" md:mt-auto md:mb-auto w-10/12 ml-auto mr-auto"
          loading="lazy"
        />
      </div>
    </Section>
  );
}

export default Dictionary;
