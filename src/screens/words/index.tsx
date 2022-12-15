import React, { useContext, useEffect, useState, Fragment } from "react";

import { sound } from "../../services/sound_function";
import { shuffle } from "../../services/algoritm_fisher_shuffle";
import ButtonTraining from "../../ui-library/buttons/ButtonTraining";
import H1 from "../../ui-library/H1";
import H2 from "../../ui-library/H2";
import { useLocation } from "react-router-dom";
import SchoolContext from "../../store/state";
import CorrectAnswer from "../../components/CorrectAnswer";
import NotCorrectAnswer from "../../components/NotCorrectAnswer";
import Timer from "../../components/Timer";
import DisplayWordBlock from "./components/DisplayWordBlock";
import Error from "../main/error/Error";
import BodyPractice from "../main/body/body_practice";
import { useDisplayWords } from "../../hooks/useDisplayWords";
interface location {
  array_data: string;
  title: string;
  subtitle: string;
}

function WordsIndex() {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const state = location.state as location;
  const context = useContext(SchoolContext);
  const arr = useDisplayWords(state);

  //checking answer
  const check = (
    item: { [key: string]: string },
    display: { [key: string]: string }
  ) => {
    setStep(step + 1);
    context.timerDecrement();
    console.log(step);
    console.log(item.vietnamese);
    console.log(display.vietnamese);
    if (item.vietnamese === display.vietnamese) {
      context.incrementPositive();
      context.incrementTotal();
    } else {
      context.incrementNegative();
      context.incrementTotal();
    }
  };

  useEffect(() => {
    if (context.countTotal !== 0) {
      context.resetLesson();
    }
  }, []);

  return (
    <>
      {arr?.length !== 0 && state?.title ? (
        <BodyPractice>
          <H1 children={state?.title} />
          <H2 children={state?.subtitle} />

          <>
            {arr?.slice(step - 1, step).map((display, index) => (
              <Fragment key={display.id}>
                <DisplayWordBlock
                  word={display.vietnamese}
                  key={index}
                  picture={display.picture}
                  example={display.example}
                  onClick={() => {
                    sound(display.audio);
                  }}
                />

                <div className="justify-center my-4 flex-wrap hidden lg:flex md:flex">
                  <CorrectAnswer children={context.countPositive} />
                  <NotCorrectAnswer children={context.countNegative} />
                  <Timer seconds={context.countTimer} />
                </div>

                <div className="myItems">
                  {shuffle(
                    arr
                      .slice(step - 1, step + 3)
                      .concat(arr)
                      .filter((item, index) => index < 4)
                      .map((item, index) => (
                        <ButtonTraining
                          key={index}
                          onClick={() => check(item, display)}
                          children={item.english}
                        />
                      ))
                  )}
                </div>
              </Fragment>
            ))}
          </>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default WordsIndex;
