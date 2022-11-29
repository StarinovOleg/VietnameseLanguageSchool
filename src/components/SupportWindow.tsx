import React from "react";

const SupportWindow = (props: {
  position?: string;
  text?: string;
  color?: string;
  img?: any;
  shadowcolor?: any;
  onClick?: any;
}) => {
  return (
    <div
      className={`${props.position}  ${props.shadowcolor} z-50 bg-white opacity-90 border-solid rounded-xl cursor-pointer p-2  md:w-[32rem]  lg:w-[32rem] w-auto shadow-lg `}
    >
      <div className="flex">
        <img src={props.text} alt="gif animation" className="h-auto m-auto" />
        <img
          src={props.img}
          alt="logo"
          className="w-24 hidden lg:block md:block  m-auto"
        />
      </div>
      <div className={`${props.color} p-2`} onClick={props.onClick}>
        X CLOSE
      </div>
    </div>
  );
};
export default SupportWindow;
