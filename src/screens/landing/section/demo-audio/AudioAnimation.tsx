import React from "react";

import Marquee from "react-fast-marquee";
import img from '../../../../assets/demo-audio/magnitola.png'
import img1 from '../../../../assets/demo-audio/note1.png'
import img2 from '../../../../assets/demo-audio/note2.png'
const AudioAnimation = (props: {  }) => {
  return (
    <div  className="relative">    
      <div className=" lg:w-[60%] md:w-[60%] sm:w-[auto] m-auto pt-10">    
      <img src={img} alt='icons'  className="lg:w-[17%] md:w-[17%] w-[30%] absolute z-50 "/>
      <Marquee className="text-left bg-background-demo-music bg-no-repeat bg-center sm:h-[20rem] h-[10rem] "speed={50}  direction='right' >
        <div className="pr-[10rem]">
        <img src={img1} alt='icons'  className="lg:w-10 md:w-10  w-6"/>
        </div>
        <div className="pr-[10rem]">
        <img src={img2} alt='icons'  className="lg:w-10 md:w-10 w-6"/>          
        </div>
        <div>
        <img src={img1} alt='icons'  className="lg:w-10 md:w-10 w-6"/>           
        </div>
        <div>
        <img src={img1} alt='icons'  className="lg:w-10 md:w-10 w-6"/>           
        </div>
      </Marquee>
      </div>
    </div>
  );
};
export default AudioAnimation;
