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
  const check = (item: string, index: number) => {
    index = index + 1;
    if (index === step) {
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
        arr = chooseRandom(unit_1, 4);
        return arr;
      case converstation.lessons.lessons[1].title:
        arr = chooseRandom(unit_2, 4);
        return arr;
      case converstation.lessons.lessons[2].title:
        arr = chooseRandom(unit_3, 4);
        return arr;
      case converstation.lessons.lessons[3].title:
        arr = chooseRandom(unit_4, 4);
        return arr;
      case converstation.lessons.lessons[4].title:
        arr = chooseRandom(unit_5, 4);
        return arr;
      case converstation.lessons.lessons[5].title:
        arr = chooseRandom(unit_6, 4);
        return arr;
      case converstation.lessons.lessons[6].title:
        arr = chooseRandom(unit_7, 4);
        return arr;
      case converstation.lessons.lessons[7].title:
        arr = chooseRandom(unit_8, 4);
        return arr;
      case converstation.lessons.lessons[8].title:
        arr = chooseRandom(unit_9, 4);
        return arr;
      case converstation.lessons.lessons[9].title:
        arr = chooseRandom(unit_10, 4);
        return arr;
      case converstation.lessons.lessons[10].title:
        arr = chooseRandom(unit_11, 4);
        return arr;
      case converstation.lessons.lessons[11].title:
        arr = chooseRandom(unit_12, 4);
        return arr;
      case converstation.lessons.lessons[12].title:
        arr = chooseRandom(unit_13, 4);
        return arr;
      case converstation.lessons.lessons[13].title:
        arr = chooseRandom(unit_14, 4);
        return arr;
      case converstation.lessons.lessons[14].title:
        arr = chooseRandom(unit_15, 4);
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
            {arr.slice(step - 1, step).map((step, index) => (
              <DisplayWordBlock
                word={step.vietnamese}
                key={index}
                picture={step.picture}
                example={step.example}
                onClick={() => {
                  sound(step.audio);
                }}
              />
            ))}
          </div>
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
                    onClick={() => check(item, index)}
                    children={item.english}
                    btnprimary="cursor-pointer text-xl border-2 border-sky-500 md:hover:border-sky-800 lg:hover:border-sky-800 rounded-lg text-sky-500  lg:hover:text-sky-800 md:hover:text-sky-800"
                  />
                ))
            )}
          </div>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default LearningIndex;
