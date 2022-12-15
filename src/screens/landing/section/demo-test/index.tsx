import React, { useState, useContext, useEffect, Fragment } from "react";
import SchoolContext from "../../../../store/state";
import H2 from "../../../../ui-library/H2";
import { common_10_words } from "../../../../dictionary/common-words/common-10-words";
import Section from "../../../main/section/Section";
import { shuffle } from "../../../../services/algoritm_fisher_shuffle";
import ButtonTraining from "../../../../ui-library/buttons/ButtonTraining";
import { converstation } from "../../../../store/static";
import CorrectAnswer from "../../../../components/CorrectAnswer";
import NotCorrectAnswer from "../../../../components/NotCorrectAnswer";
import Link from "../../../../ui-library/Link";
import H1 from "../../../../ui-library/H1";
import { chooseRandom } from "../../../words/components/random_words";

let random_words = chooseRandom(common_10_words, 10);

const DemoTest = (props: { id?: string }) => {
  const [step, setStep] = useState(1);
  const context = useContext(SchoolContext);
  //refresh page
  const refreshPage = () => {
    setStep(1);
    context.reset();
  };
  //checking answer
  const check = (item: any, display: any) => {
    setStep(step + 1);
    if (item.vietnamese === display.vietnamese) {
      context.incrementTestPositive();
      context.incrementTestTotal();
    } else {
      context.incrementTestNegative();
      context.incrementTestTotal();
    }
  };
  useEffect(() => {
    if (context.countTotal !== 0 || context.countTotal === 0) {
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
            {context.countTestTotal !== 10 ? (
              <>
                {random_words.slice(step - 1, step).map((display, index) => (
                  <Fragment key={index}>
                    <H1 children={display.vietnamese} key={index} />
                    <div className="flex lg:justify-center md:justify-center  text-left  flex-wrap">
                      <CorrectAnswer children={context.countTestPositive} />
                      <NotCorrectAnswer children={context.countTestNegative} />
                    </div>
                    <>
                      {shuffle(
                        random_words
                          .slice(step - 1, step + 3)
                          .concat(random_words)
                          .filter((item, index) => index < 4)
                          .map((item, index) => (
                            <ButtonTraining
                              key={index}
                              onClick={() => check(item, display)}
                              children={item.english}
                            />
                          ))
                      )}
                    </>
                  </Fragment>
                ))}
              </>
            ) : (
              <>
                <div className="flex lg:justify-center md:justify-center  text-left  flex-wrap">
                  <CorrectAnswer children={context.countTestPositive} />
                  <NotCorrectAnswer children={context.countTestNegative} />
                </div>
                <Link
                  children={converstation.landing.continue}
                  align="text-center p-10"
                  secondary_color="text-sky-800"
                  state={{
                    title: `${converstation.words.title}`,
                  }}
                />

                <div
                  onClick={refreshPage}
                  className=" inline-block cursor-pointer border-2 border-sky-500 hover:border-sky-800 rounded-lg m-5 p-2 text-xl text-sky-500  hover:text-sky-800 font-['KGLifeisMessy'] "
                >
                  repeat
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default DemoTest;
