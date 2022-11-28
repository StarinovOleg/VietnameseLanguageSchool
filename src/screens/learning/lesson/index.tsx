import React, { useContext, useEffect, useState, Fragment } from "react";

import negative from "../../../assets/sounds/noncorrect.mp3";
import positive from "../../../assets/sounds/correct.mp3";
import { sound } from "../../../services/sound_function";
import { unit_15 } from "../../../dictionary/unit-15/unit_15";
import { unit_14 } from "../../../dictionary/unit-14/unit_14";
import { unit_13 } from "../../../dictionary/unit-13/unit_13";
import { unit_12 } from "../../../dictionary/unit-12/unit_12";
import { unit_11 } from "../../../dictionary/unit-11/unit_11";
import { unit_10 } from "../../../dictionary/unit-10/unit_10";
import { unit_9 } from "../../../dictionary/unit-9/unit_9";
import { unit_8 } from "../../../dictionary/unit-8/unit_8";
import { unit_7 } from "../../../dictionary/unit-7/unit_7";
import { unit_6 } from "../../../dictionary/unit-6/unit_6";
import { unit_5 } from "../../../dictionary/unit-5/unit_5";
import { unit_4 } from "../../../dictionary/unit-4/unit_4";
import { unit_3 } from "../../../dictionary/unit-3/unit_3";
import { unit_2 } from "../../../dictionary/unit-2/unit_2";
import { unit_1 } from "../../../dictionary/unit-1/unit_1";
import { shuffle } from "./algoritm_fisher_shuffle";
import Button from "../../../ui-library/Button";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import { useNavigate, useLocation } from "react-router-dom";
import SchoolContext from "../../../store/state";
import { converstation } from "../../../store/static";
import { chooseRandom } from "./random_words";
import CorrectAnswer from "../../../components/CorrectAnswer";
import NotCorrectAnswer from "../../../components/NotCorrectAnswer";
import Timer from "../../../components/Timer";
import DisplayWordBlock from "../../../components/DisplayWordBlock";
import Error from "../../main/error/Error";
import BodyPractice from "../../main/body/body_practice";
interface location {
  title: any;
  subtitle: any;
}
const u_1 = chooseRandom(unit_1, 10);
const u_2 = chooseRandom(unit_2, 10);
const u_3 = chooseRandom(unit_3, 10);
const u_4 = chooseRandom(unit_4, 10);
const u_5 = chooseRandom(unit_5, 10);
const u_6 = chooseRandom(unit_6, 10);
const u_7 = chooseRandom(unit_7, 10);
const u_8 = chooseRandom(unit_8, 10);
const u_9 = chooseRandom(unit_9, 10);
const u_10 = chooseRandom(unit_10, 10);
const u_11 = chooseRandom(unit_11, 10);
const u_12 = chooseRandom(unit_12, 10);
const u_13 = chooseRandom(unit_13, 10);
const u_14 = chooseRandom(unit_14, 10);
const u_15 = chooseRandom(unit_15, 10);

function LearningIndex() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as location;
  const context = useContext(SchoolContext);
  let arr: ConcatArray<any> = [];

  //redirect on done screen
  const redirectEndScreen = () => {
    if (context.countTotal >= 9) {
      navigate("/endtest", {
        replace: true,
        state: { title: `${state.title}` },
      });
    }
  };

  //checking answer
  const check = (item: any, display: any) => {
    setStep(step + 1);

    context.timerDecrement();
    console.log(step);
    console.log(item.vietnamese);
    console.log(display.vietnamese);
    if (item.vietnamese === display.vietnamese) {
      redirectEndScreen();
      context.incrementPositive();
      context.incrementTotal();
      sound(positive);
    } else {
      redirectEndScreen();
      context.incrementNegative();
      context.incrementTotal();
      sound(negative);
    }
  };
  //dynamic words display
  const displayWords = () => {
    switch (state?.title) {
      case converstation.lessons.lessons[0].title:
        arr = u_1;
        return arr;
      case converstation.lessons.lessons[1].title:
        arr = u_2;
        return arr;
      case converstation.lessons.lessons[2].title:
        arr = u_3;
        return arr;
      case converstation.lessons.lessons[3].title:
        arr = u_4;
        return arr;
      case converstation.lessons.lessons[4].title:
        arr = u_5;
        return arr;
      case converstation.lessons.lessons[5].title:
        arr = u_6;
        return arr;
      case converstation.lessons.lessons[6].title:
        arr = u_7;
        return arr;
      case converstation.lessons.lessons[7].title:
        arr = u_8;
        return arr;
      case converstation.lessons.lessons[8].title:
        arr = u_9;
        return arr;
      case converstation.lessons.lessons[9].title:
        arr = u_10;
        return arr;
      case converstation.lessons.lessons[10].title:
        arr = u_11;
        return arr;
      case converstation.lessons.lessons[11].title:
        arr = u_12;
        return arr;
      case converstation.lessons.lessons[12].title:
        arr = chooseRandom(unit_13, 4);
        return arr;
      case converstation.lessons.lessons[13].title:
        arr = u_13;
        return arr;
      case converstation.lessons.lessons[14].title:
        arr = u_14;
        return arr;
      default:
        return arr;
    }
  };
  displayWords();
  useEffect(() => {
    if (context.countTotal !== 0) {
      context.resetLesson();
    }
  }, []);

  return (
    <>
      {arr.length != 0 && state?.title ? (
        <BodyPractice>
          <H1 children={state?.title} />
          <H2 children={state?.subtitle} />

          <div className="text-4xl my-4">
            {arr.slice(step - 1, step).map((display, index) => (
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

                <div className="flex justify-center my-4 flex-wrap">
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
                        <Button
                          key={index}
                          onClick={() => check(item, display)}
                          children={item.english}
                          btnprimary="cursor-pointer text-xl border-2 border-sky-500 md:hover:border-sky-800 lg:hover:border-sky-800 rounded-lg text-sky-500  lg:hover:text-sky-800 md:hover:text-sky-800"
                        />
                      ))
                  )}
                </div>
              </Fragment>
            ))}
          </div>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default LearningIndex;
