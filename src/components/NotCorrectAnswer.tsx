import React from "react";
const NotCorrectAnswer = (props: { children: number }) => {
  return (
    <div className="text-xl text-red-500 mx-4">
      Not Correct answer:
      <span className="text-5xl mx-4">{props.children}</span>
    </div>
  );
};
export default NotCorrectAnswer;
