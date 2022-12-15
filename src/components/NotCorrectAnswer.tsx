import React from "react";
import { converstation } from "../store/static";

const NotCorrectAnswer = (props: { children: number }) => {
  return (
    <div className="text-xl text-red-500 mx-4">
      {converstation.answer.negative}
      <span className="lg:text-5xl md:text-5xl text-xl mx-4">
        {props.children}
      </span>
    </div>
  );
};
export default NotCorrectAnswer;
