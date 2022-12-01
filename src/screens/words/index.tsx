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
import DisplayWordBlock from "./components/DisplayWordBlock";
import Error from "../main/error/Error";
import BodyPractice from "../main/body/body_practice";
interface location {
  array_data: any;
  title: any;
  subtitle: any;
}

function WordsIndex() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as location;
  const context = useContext(SchoolContext);
  let arr: Array<any> = [];

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
        arr = JSON.parse(state?.array_data);
        console.log(arr);
        return arr;
      case converstation.words.lessons[1].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[2].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[3].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[4].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[5].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[6].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[7].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[8].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[9].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[10].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[11].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[12].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[13].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      case converstation.words.lessons[14].title:
        arr = JSON.parse(state?.array_data);
        return arr;
      default:
        return arr;
    }
  };
  displayWords();
  useEffect(() => {
    if (context.countTotal !== 0) {
      context.resetLesson();
      window.location.reload();
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
