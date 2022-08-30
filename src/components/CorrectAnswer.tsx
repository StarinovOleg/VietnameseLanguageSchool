import React from "react";
const CorrectAnswer = (props: { children: number }) => {
  return (
    <div className="text-xl text-green-500 mx-4">
      Correct answer:
      <span className="text-5xl mx-4">{props.children}</span>
    </div>
  );
};
export default CorrectAnswer;
