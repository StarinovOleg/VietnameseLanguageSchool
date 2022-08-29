import React, { useContext } from "react";

import { unit_1 } from "../../../dictionary/unit-1/unit_1";
import { shuffle } from "./algoritm_fisher_shuffle";
import Button from "../../../ui-library/Button";
import { useNavigate, useLocation } from "react-router-dom";
import SchoolContext from "../../../store/state";

const title = "Unit 1";
function LearningIndex() {
  const words = Object.keys(unit_1);
  const arr = [];
  const navigate = useNavigate();

  const context = useContext(SchoolContext);

  //random words
  for (let i = arr.length; arr.length < 10; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (arr.indexOf(randomWord) == -1) {
      arr.push(randomWord);
    }
  }

  //checking answer
  const check = (number) => {
    if (number === arr[1]) {
      redirectEndScreen();
      context.increment();
    } else {
      redirectEndScreen();
      context.incrementNegative();
    }
  };
  //redirect on done screen
  const redirectEndScreen = () => {
    if (context.count >= 10 || context.countNegative >= 10) {
      navigate("/endtest", { replace: true, state: { title: `${title}` } });
      window.onpopstate = function (event) {
        window.location.reload();
      };
    }
  };

  return (
    <div className="text-center bg-white p-4 border-solid rounded-xl m-4">
      <h1 className="text-5xl text-blue-700	font-semibold">{title} </h1>
      <div className="text-4xl my-4 ">{unit_1[arr[1]]}</div>
      <div className="flex justify-center my-4">
        <div className="text-xl text-green-500 mx-4">
          Correct answer:
          <span className="text-5xl mx-4">{context.count}</span>
        </div>
        <div className="text-xl text-red-500 mx-4">
          Not correct answer:
          <span className="text-5xl mx-4">{context.countNegative}</span>
        </div>
      </div>
      <div>
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
    </div>
  );
}

export default LearningIndex;
