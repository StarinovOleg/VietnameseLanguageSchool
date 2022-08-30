import React, { useContext, useEffect } from "react";

import { unit_1 } from "../../../dictionary/unit-1/unit_1";
import { unit_2 } from "../../../dictionary/unit-2/unit_2";
import { shuffle } from "./algoritm_fisher_shuffle";
import Button from "../../../ui-library/Button";
import H1 from "../../../ui-library/H1";
import { useNavigate, useLocation } from "react-router-dom";
import SchoolContext from "../../../store/state";
import { lessons } from "../../../store/static";
import { random } from "./random_words";
import CorrectAnswer from "../../../components/CorrectAnswer";
import NotCorrectAnswer from "../../../components/NotCorrectAnswer";

function LearningIndex() {
  const words = Object.keys(unit_1);
  const words2 = Object.keys(unit_2);
  const arr = [];
  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(SchoolContext);

  //random words
  /*if (location.state?.title === lessons.lesson_1.title) {
    random(words, arr);
  } else if (location.state?.title === lessons.lesson_2.title) {
    random(words2, arr);
  }*/
  //checking answer
  const check = (number) => {
    if (number === arr[1]) {
      redirectEndScreen();
      context.incrementPositive();
      context.incrementTotal();
    } else {
      redirectEndScreen();
      context.incrementNegative();
      context.incrementTotal();
    }
  };
  //redirect on done screen
  const redirectEndScreen = () => {
    if (context.countTotal >= 9) {
      navigate("/endtest", {
        replace: true,
        state: { title: `${location.state.title}` },
      });
      window.onpopstate = function (event) {
        window.location.reload();
      };
    }
  };

  //dynamic dictionary words
  /*  const vietnameseWord = () => {
    if (location.state?.title === lessons.lesson_1.title) {
      random(words, arr);
      return <div>{unit_1[arr[1]]}</div>;
    } else if (location.state?.title === lessons.lesson_2.title) {
      random(words2, arr);
      return <div>{unit_2[arr[1]]}</div>;
    }
  };*/
  const displayWords = () => {
    switch (location.state?.title) {
      case lessons.lesson_1.title:
        random(words, arr);
        return <div>{unit_1[arr[1]]}</div>;
      case lessons.lesson_2.title:
        random(words2, arr);
        return <div>{unit_2[arr[1]]}</div>;
      default:
        return <div>Chose Test Page</div>;
    }
  };
  useEffect(() => {
    displayWords();
  }, []);

  return (
    <div className="bg-[#260105] h-screen">
      {location.state?.title ? (
        <div className="text-center bg-white p-4 border-solid rounded-xl m-4">
          <H1 children={location.state?.title} />
          <div className="text-4xl my-4 ">{displayWords()}</div>
          <div className="flex justify-center my-4">
            <CorrectAnswer children={context.countPositive} />
            <NotCorrectAnswer children={context.countNegative} />
          </div>

          <div className="myItems">
            {shuffle(
              arr
                .filter((item, index) => index < 4)
                .map((number, index) => (
                  <Button
                    key={index}
                    onClick={() => check(number)}
                    children={number}
                    btnprimary="btn-primary"
                  />
                ))
            )}
          </div>
          <Button children="Continue" btnsecondary="btn-secondary" />
        </div>
      ) : (
        <div className="text-center bg-white p-4 border-solid rounded-xl m-4">
          <H1 children="Chose Test Page" />
          <Button
            onClick={() =>
              navigate("/landing", {
                replace: true,
              })
            }
            btnprimary="btn-primary"
          >
            Test Page
          </Button>
        </div>
      )}
    </div>
  );
}

export default LearningIndex;
