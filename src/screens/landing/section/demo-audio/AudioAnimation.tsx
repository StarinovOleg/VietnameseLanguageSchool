import React from "react";

import Marquee from "react-fast-marquee";
import { converstation } from "../../../../store/static";

const AudioAnimation = () => {
  return (
    <div className="relative">
      <div className=" lg:w-[60%] md:w-[60%] sm:w-[auto] m-auto pt-10">
        <img
          src={converstation.demo_audio.audio_animation_magnitola}
          alt="icons-magnitola"
          className="lg:w-[17%] md:w-[19%] sm:w-[25%] w-[30%] absolute z-50 top-0 bottom-0 m-auto"
        />
        <img
          src={converstation.demo_audio.audio_animation_terminal}
          alt="icons-terminal"
          className="animate-ping lg:w-[4%] md:w-[4%] sm:w-[7%] w-[7%] absolute z-50 top-[62%] lg:top-[62%] md:top-[60%] left-[17%] sm:left-[17%] md:left-[31%] lg:left-[30%] m-auto"
        />

        <Marquee
          className="text-left  sm:h-[20rem] h-[10rem] "
          speed={100}
          direction="right"
        >
          <div className="pr-[10rem] w-[auto] m-auto">
            <img
              src={converstation.demo_audio.audio_animation_note1}
              alt="icons"
              className="lg:w-10 md:w-8 sm:w-6 w-6"
            />
          </div>
          <div className="pr-[10rem]">
            <img
              src={converstation.demo_audio.audio_animation_note2}
              alt="icons"
              className="lg:w-10 md:w-8 sm:w-6 w-6"
            />
          </div>
          <div className="pr-[10rem]">
            <img
              src={converstation.demo_audio.audio_animation_note1}
              alt="icons"
              className="lg:w-10 md:w-8 sm:w-6 w-6"
            />
          </div>
          <div>
            <img
              src={converstation.demo_audio.audio_animation_note1}
              alt="icons"
              className="lg:w-10 md:w-8 sm:w-6 w-6"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};
export default AudioAnimation;
