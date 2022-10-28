import React from "react";
import { NavLink } from "react-router-dom";
import ButtonSound from "../../../learning/components/ButtonSound";
import useSound from 'use-sound';
import img from '../assets/icons-lessons/unit1.png'
const CardDemoAudio = (props:
    {item?:any, text?:any, 
     color?:string, img?:any, 
     shadowcolor?:any, 
     onClick?:any}) => {
  const [play] = useSound(props.item);
  return (
    <div className={`${props.shadowcolor} w-44 border-solid rounded-xl bg-[#fdfdef]  m-4 text-center group `} >
        <div className="p-10"><p className={`text-6xl ${props.color} font-['DancingScript']`}>{props.text}</p></div> 
        <div className="bg-[#800000] border-solid rounded-b-lg p-10 relative">
            <ButtonSound onClick={play} hover='group-hover:p-6'position='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        </div>
    </div>
  );
};
export default CardDemoAudio;