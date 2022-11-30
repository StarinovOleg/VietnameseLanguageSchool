import React, { useContext, useEffect, useState, Fragment } from "react";

import negative from "../../assets/sounds/noncorrect.mp3";
import positive from "../../assets/sounds/correct.mp3";
import { sound } from "../../services/sound_function";

import { shuffle } from "../../services/algoritm_fisher_shuffle";
import Button from "../../ui-library/Button";
import H1 from "../../ui-library/H1";
import H2 from "../../ui-library/H2";
import { useNavigate, useLocation } from "react-router-dom";
import SchoolContext from "../../store/state";
import { converstation } from "../../store/static";
import { chooseRandom } from "./components/random_words";
import CorrectAnswer from "../../components/CorrectAnswer";
import NotCorrectAnswer from "../../components/NotCorrectAnswer";
import Timer from "../../components/Timer";
import DisplayWordBlock from "../../components/DisplayWordBlock";
import Error from "../main/error/Error";
import BodyPractice from "../main/body/body_practice";
interface location {
  title: any;
  subtitle: any;
}
const u_1 = chooseRandom(converstation.words.lessons[0].array_data, 10);
const u_2 = chooseRandom(converstation.words.lessons[1].array_data, 10);
const u_3 = chooseRandom(converstation.words.lessons[2].array_data, 10);
const u_4 = chooseRandom(converstation.words.lessons[3].array_data, 10);
const u_5 = chooseRandom(converstation.words.lessons[4].array_data, 10);
const u_6 = chooseRandom(converstation.words.lessons[5].array_data, 10);
const u_7 = chooseRandom(converstation.words.lessons[6].array_data, 10);
const u_8 = chooseRandom(converstation.words.lessons[7].array_data, 10);
const u_9 = chooseRandom(converstation.words.lessons[8].array_data, 10);
const u_10 = chooseRandom(converstation.words.lessons[9].array_data, 10);
const u_11 = chooseRandom(converstation.words.lessons[10].array_data, 10);
const u_12 = chooseRandom(converstation.words.lessons[11].array_data, 10);
const u_13 = chooseRandom(converstation.words.lessons[12].array_data, 10);
const u_14 = chooseRandom(converstation.words.lessons[13].array_data, 10);
const u_15 = chooseRandom(converstation.words.lessons[14].array_data, 10);

function WordsIndex() {
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
      case converstation.words.lessons[0].title:
        arr = u_1;
        return arr;
      case converstation.words.lessons[1].title:
        arr = u_2;
        return arr;
      case converstation.words.lessons[2].title:
        arr = u_3;
        return arr;
      case converstation.words.lessons[3].title:
        arr = u_4;
        return arr;
      case converstation.words.lessons[4].title:
        arr = u_5;
        return arr;
      case converstation.words.lessons[5].title:
        arr = u_6;
        return arr;
      case converstation.words.lessons[6].title:
        arr = u_7;
        return arr;
      case converstation.words.lessons[7].title:
        arr = u_8;
        return arr;
      case converstation.words.lessons[8].title:
        arr = u_9;
        return arr;
      case converstation.words.lessons[9].title:
        arr = u_10;
        return arr;
      case converstation.words.lessons[10].title:
        arr = u_11;
        return arr;
      case converstation.words.lessons[11].title:
        arr = u_12;
        return arr;
      case converstation.words.lessons[12].title:
        arr = u_13;
        return arr;
      case converstation.words.lessons[13].title:
        arr = u_13;
        return arr;
      case converstation.words.lessons[14].title:
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

export default WordsIndex;
