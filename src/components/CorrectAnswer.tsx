import React from "react";
import { converstation } from "../store/static";
const CorrectAnswer = (props: { children: number }) => {
  return (
    <div className="text-xl text-green-500 mx-4">
      {converstation.answer.positive}
      <span className="lg:text-5xl md:text-5xl text-xl mx-4">
        {props.children}
      </span>
    </div>
  );
};
export default CorrectAnswer;
