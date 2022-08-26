import React from "react";

import { unit_1 } from "../../../dictionary/unit-1/unit_1";
import { shuffle } from "./algoritm_fisher_shuffle";
import { GetReducer } from "../../../store/reducers/reducer-increment";
import Button from "../../../ui-library/Button";
import { useNavigate } from "react-router-dom";
function LearningIndex() {
  const words = Object.keys(unit_1);
  const arr = [];
  const [state, dispatch] = GetReducer();
  const [stateNotCorrect = state, dispatchNotCorrect] = GetReducer();
  const navigate = useNavigate();
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
      dispatch({ type: "increment" });
      redirectEndScreen();
    } else {
      dispatchNotCorrect({ type: "increment" });
      redirectEndScreen();
    }
  };
  //redirect on done screen
  const redirectEndScreen = () => {
    if (stateNotCorrect.count > 10) {
      navigate("/endtest");
    }
  };

  return (
    <div className="text-center bg-white p-4 border-solid rounded-xl m-4">
      <h1 className="text-5xl text-blue-700	font-semibold">Unit 1: </h1>
      <div className="text-4xl my-4 ">{unit_1[arr[1]]}</div>
      <div className="flex justify-center my-4">
        <div className="text-xl text-green-500 mx-4">
          Correct answer:
          <span className="text-5xl mx-4">{state.count}</span>
        </div>
        <div className="text-xl text-red-500 mx-4">
          Not correct answer:
          <span className="text-5xl mx-4">{stateNotCorrect.count}</span>
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
