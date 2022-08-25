import React, { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import { unit_1 } from "../../../dictionary/unit-1/unit_1";
import { shuffle } from "./algoritm_fisher_shuffle";

const initialStateCorrectAnswer = { count: 0 };
function reducerCorrect(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
const initialStateNotCorrectAnswer = { countNotCorrect: 0 };
function reducerNotCorrect(stateNotCorrect, action) {
  switch (action.type) {
    case "increment":
      return { countNotCorrect: stateNotCorrect.countNotCorrect + 1 };
    default:
      throw new Error();
  }
}
function LearningIndex() {
  const words = Object.keys(unit_1);
  const arr = [];
  const [state, dispatch] = useReducer(
    reducerCorrect,
    initialStateCorrectAnswer
  );
  const [stateNotCorrect, dispatchNotCorrect] = useReducer(
    reducerNotCorrect,
    initialStateNotCorrectAnswer
  );

  //random words
  for (let i = arr.length; arr.length < 4; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (arr.indexOf(randomWord) == -1) {
      arr.push(randomWord);
    }
  }

  //checking answer
  const check = (number) => {
    if (number === arr[1]) {
      dispatch({ type: "increment" });
    } else {
      dispatchNotCorrect({ type: "increment" });
    }
  };

  return (
    <div className="text-center bg-white p-4 border-solid rounded-xl m-4">
      <h1 className="text-5xl text-blue-700	font-semibold">Unit 1: </h1>
      <div className="text-4xl my-4 ">{unit_1[arr[1]]}</div>
      <div className="flex justify-center my-4">
        <div className="text-xl text-green-500 mx-4">
          Correct answer:<span className="text-5xl mx-4">{state.count}</span>
        </div>
        <div className="text-xl text-red-500 mx-4">
          Not correct answer:
          <span className="text-5xl mx-4">
            {stateNotCorrect.countNotCorrect}
          </span>
        </div>
      </div>
      <div>
        <center>
          <div className="myItems">
            {shuffle(
              arr.map((number, index) => (
                <button
                  type="button"
                  key={index}
                  className="p-4 m-4 bg-blue-700	 text-white rounded-xl	 border-solid w-56 cursor-pointer"
                  onClick={() => check(number)}
                >
                  {number}
                </button>
              ))
            )}
          </div>
        </center>
        <button
          className="p-4 bg-black rounded-xl text-white cursor-pointer"
          type="button"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default LearningIndex;
