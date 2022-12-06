import React, { MouseEventHandler } from "react";
import ReactAudioPlayer from "react-audio-player";

function DisplayBlock(props: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  audio?: string | undefined;
  word?: string;
  picture?: string;
  example?: string;
}) {
  return (
    <div className="text-left ">
      <p className="lg:leading-[3rem] md:leading-[3rem] leading-[3rem] text-xs lg:text-2xl md:text-2xl">
        {props.word}
      </p>
      <ReactAudioPlayer
        className="inline-block bg-inherit mt-4 w-full lg:w-auto md:w-auto"
        src={props.audio}
        controls
      />
    </div>
  );
}

export default DisplayBlock;
