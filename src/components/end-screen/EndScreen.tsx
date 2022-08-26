import React, { useContext } from "react";
import SchoolContext from "../../store/state";
function EndScreen() {
  const context = useContext(SchoolContext);
  return (
    <>
      <h1 className="text-5xl text-blue-700	font-semibold">
        Congratulation you done{" "}
      </h1>

      <div>Correct Answer: {context.count}</div>
      <div>Not Correct Answer: {context.countNegative}</div>
    </>
  );
}

export default EndScreen;
