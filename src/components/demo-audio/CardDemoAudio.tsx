import React from "react";
import { NavLink } from "react-router-dom";
import ButtonSound from "../../screens/learning/components/ButtonSound";
import useSound from 'use-sound';
import img from '../assets/icons-lessons/unit1.png'
const CardDemoAudio = (props:
    {item?:any, text?:any, 
     color?:string, img?:any, 
     shadowcolor?:any, 
     onClick?:any}) => {
  const [play] = useSound(props.item);
  return (
    <div className={`${props.shadowcolor} w-44 border-solid rounded-xl bg-[#fdfdef]  m-4 text-center`}>
        <div className="p-10"><p className={`text-5xl ${props.color}`}>{props.text}</p></div> 
        <div className="bg-stone-500 border-solid rounded-b-lg p-4">
            <ButtonSound onClick={play}/>
        </div>
    </div>
  );
};
export default CardDemoAudio;