import React from "react";
import P from "../ui-library/P";
const SupportWindow = (props:
  {position?:string, text?:string, color?:string, img?:any, shadowcolor?:any, onClick?:any}) => {
  return (
  <div className={`${props.position}  ${props.shadowcolor} z-50 bg-white border-solid rounded-xl cursor-pointer p-2  md:w-[32rem]  lg:w-[32rem] w-auto shadow-lg `}>
    <div className="flex">
        <P children={props.text} color={props.color} align='m-auto'/>
        <img src={props.img} alt="logo" className="w-24 ml-4 mr-4 h-auto m-auto" />  
    </div>
    <div className={`${props.color} p-2`} onClick={props.onClick}>X CLOSED</div>
  </div>
  );
};
export default SupportWindow;
