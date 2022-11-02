import React from "react";

import Marquee from "react-fast-marquee";
import img from '../../../../assets/demo-audio/magnitola.png'
import img1 from '../../../../assets/demo-audio/note1.png'
import img2 from '../../../../assets/demo-audio/note2.png'
import terminal from '../../../../assets/demo-audio/terminal.png'
const AudioAnimation = (props: {  }) => {
  return (
    <div  className="relative">    
      <div className=" lg:w-[60%] md:w-[60%] sm:w-[auto] m-auto pt-10">    
      <img src={img} alt='icons'  className="lg:w-[17%] md:w-[19%] sm:w-[25%] w-[30%] absolute z-50 top-0 bottom-0 m-auto"/>
      <img src={terminal} alt='icons'  className="animate-ping lg:w-[4%] md:w-[4%] sm:w-[7%] w-[7%] absolute z-50 top-[62%] lg:top-[62%] md:top-[60%] left-[17%] sm:left-[17%] md:left-[31%] lg:left-[30%] m-auto"/>

      <Marquee className="text-left  sm:h-[20rem] h-[10rem] "speed={100}  direction='right' >
        <div className="pr-[10rem] w-[auto] m-auto">
        <img src={img1} alt='icons'  className="lg:w-10 md:w-8 sm:w-6 w-6"/>
        </div>
        <div className="pr-[10rem]">
        <img src={img2} alt='icons'  className="lg:w-10 md:w-8 sm:w-6 w-6"/>          
        </div>
        <div className="pr-[10rem]">
        <img src={img1} alt='icons'  className="lg:w-10 md:w-8 sm:w-6 w-6"/>           
        </div>
        <div >
        <img src={img1} alt='icons'  className="lg:w-10 md:w-8 sm:w-6 w-6"/>           
        </div>
      </Marquee>
      </div>
    </div>
  );
};
export default AudioAnimation;
