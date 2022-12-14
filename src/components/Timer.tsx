import React from "react";
import icon_timer from "../assets/icon-dictionary.png";
function Timer(props: { seconds: any }) {
  return (
    <div className="flex ">
      <img src={icon_timer} alt="logo" className="w-12 h-12 " />
      <span className="  text-3xl text-yellow-500 pt-2">{props.seconds}</span>
    </div>
  );
}

export default Timer;
