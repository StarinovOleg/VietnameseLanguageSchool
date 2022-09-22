import React, { MouseEventHandler } from "react";
import ButtonSound from "./ButtonSound";
import ReactAudioPlayer from 'react-audio-player';
import { useLocation } from "react-router-dom"

function DisplayWordBlock(props: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  audio?:any,
  word: string;
  picture?:string;
  example?:string
  }) {
  const location = useLocation();
  return (
    <>
    <div className="leading-[3rem]">{props.word}</div>
    <div className="inline-block pt-10"><img src={props.picture}/></div>
    <div className="text-blue-500 p-10">
      <span className="text-xl p-2">{props.example}</span>
    </div>
    {location.pathname==='/learning'?<ButtonSound onClick={props.onClick} />:
       <ReactAudioPlayer
          
          className="inline-block bg-inherit"
          src={props.audio}
          controls
        />
    }
     </>
    
 
  );
}

export default DisplayWordBlock;