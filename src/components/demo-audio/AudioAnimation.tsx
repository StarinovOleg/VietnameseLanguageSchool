import React from "react";
import { NavLink } from "react-router-dom";

import img from '../../assets/demo-audio/magnitola.png'
const AudioAnimation = (props: {  }) => {
  return (
    <div className="text-left pt-0 p-10 bg-background-demo-music bg-no-repeat bg-center ">
      <img src={img} alt='icons'  className=" lg:w-48  md:w-48 w-24"/>
    </div>
  );
};
export default AudioAnimation;
