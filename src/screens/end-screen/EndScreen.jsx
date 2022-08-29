import React, { useContext } from "react";
import SchoolContext from "../../store/state";
import { useLocation } from "react-router-dom";
function EndScreen() {
  const context = useContext(SchoolContext);
  const location = useLocation();
  return (
    <>
      <h1 className="text-5xl text-blue-700	font-semibold">
        Congratulation you done {location.state.title}
      </h1>
      <div>Correct Answer: {context.countPositive}</div>
      <div>Not Correct Answer: {context.countNegative}</div>
    </>
  );
}

export default EndScreen;
