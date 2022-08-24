import React, { useState } from "react";
import ReactDOM from "react-dom";
import { unit_1 } from "../../dictionary/unit-1/unit_1";
function LearningIndex() {
  const words = Object.keys(unit_1);
  const [isDisabled, setDisabled] = useState(false);
  const [index, setIndex] = useState(0);
  const arr = [];

  for (let i = 0; i < 4; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];

    if (arr.indexOf(randomWord) === -1) {
      arr.push(randomWord);
    }
  }

  return (
    <div className="text-center bg-white p-4 border-solid rounded-xl">
      <h1 className="text-xl">Unit 1: </h1>
      <div>{unit_1[arr[1]]}</div>
      <h2 className="text-red"></h2>
      <div className="wrapper">
        <center>
          <div className="myItems">
            {arr.map((number, index) => (
              <button
                key={index}
                className="p-4 m-4 bg-black text-white rounded-xl	 border-solid w-56 cursor-pointer"
              >
                {number}
              </button>
            ))}
          </div>
        </center>
        <button
          className="p-4 bg-black rounded-xl text-white cursor-pointer"
          type="button"
          disabled={isDisabled}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default LearningIndex;
