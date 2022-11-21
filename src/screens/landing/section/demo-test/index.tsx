import React, { useState, useContext, useEffect } from "react";
import SchoolContext from "../../../../store/state";
import H2 from "../../../../ui-library/H2";
import { common_10_words } from "../../../../dictionary/common-words/common-10-words";
import Section from "../../../main/section/Section";
import { shuffle } from "../../../learning/lesson/algoritm_fisher_shuffle";
import Button from "../../../../ui-library/Button";
import { converstation } from "../../../../store/static";
import CorrectAnswer from "../../../../components/CorrectAnswer";
import NotCorrectAnswer from "../../../../components/NotCorrectAnswer";
import Link from "../../../../ui-library/Link";
import H1 from "../../../../ui-library/H1";

/*
const display_vietnamese_word=(step:any)=>common_10_words.slice(step - 1, step).map((step, index) => {
  return(<H1
    children={step.vietnamese}
    key={index}
  />)
  
})*/

const DemoTest = (props: { id?: string }) => {
  const [step, setStep] = useState(1);
  const context = useContext(SchoolContext);
  //refresh page
  const refreshPage = () => {
    setStep(1);
    context.reset();
  };
  //display words
  const displayWords = (item: any, index: number) => {
    setStep(step + 1);
    console.log(step);
    console.log(index);
    if (item.id === step) {
      context.incrementTestPositive();
      context.incrementTestTotal();
    } else {
      context.incrementTestNegative();
      context.incrementTestTotal();
    }
  };
  useEffect(() => {
    if (context.countTotal !== 0) {
      context.reset();
    }
  }, []);
  return (
    <Section>
      <div className="text-center pt-20" id={props.id}>
        <H2
          children={converstation.demo_test.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
          fontcolorsecondary="text-sky-500"
        />
        <H2
          children={converstation.demo_test.subtitle}
          fontsizeprimary="lg:leading-[10rem] lg:h2-font-size-primary  sm:h2-font-size-secondary"
          fontcolorsecondary="text-sky-800"
          fontfamilysecondary="font-['KGLifeisMessy']"
        />
      </div>
      <div className="bg-[#fdfdef]">
        <div className="text-center p-4 xl mx-4 ">
          <div className="bg-white border-solid rounded-xl ">
            <div>
              {common_10_words.slice(step - 1, step).map((step, index) => (
                <H1 children={step.vietnamese} key={index} />
              ))}
            </div>
            <div className="flex lg:justify-center md:justify-center  text-left  flex-wrap">
              <CorrectAnswer children={context.countTestPositive} />
              <NotCorrectAnswer children={context.countTestNegative} />
            </div>
            <div>
              {step > common_10_words.length || context.countTestTotal >= 10 ? (
                <>
                  <Link
                    to="/training"
                    children={converstation.landing.continue}
                    align="text-center p-10"
                    secondary_color="text-sky-800"
                    state={{
                      title: `${converstation.lessons.title}`,
                    }}
                  />

                  <div
                    onClick={refreshPage}
                    className=" inline-block cursor-pointer border-2 border-sky-500 hover:border-sky-800 rounded-lg m-5 p-2 text-xl text-sky-500  hover:text-sky-800 font-['KGLifeisMessy'] "
                  >
                    repeat
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  {shuffle(
                    common_10_words
                      .slice(step - 1, step + 3)
                      .concat(common_10_words)
                      .filter((item, index) => index < 4)
                      .map((item, index) => (
                        <Button
                          key={index}
                          onClick={() => displayWords(item, index)}
                          children={item.english}
                          btnprimary="cursor-pointer border-2 border-sky-500 md:hover:border-sky-800 lg:hover:border-sky-800 rounded-lg  lg:text-5xl md:text-5xl text-xl text-sky-500  lg:hover:text-sky-800 md:hover:text-sky-800"
                        />
                      ))
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default DemoTest;
