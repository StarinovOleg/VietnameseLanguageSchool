import React from "react";
import { NavLink } from "react-router-dom";
import H2 from "../ui-library/H2";
import P from "../ui-library/P";
const CardListen = (props: { subtitle: any; to: string; state: any; title: any, src:any }) => {
  return (
    <NavLink to={props.to} state={props.state}>
      <div className=" border-solid rounded-xl cursor-pointer bg-gradient-to-b from-[#a8e063]  to-[#56ab2f] m-2 p-2 h-auto md:drop-shadow-xl sm:drop-shadow-none text-center">
       
          <img src={props.src} alt='icons' className="md:mt-auto md:mb-auto w-64 ml-auto mr-auto"/>
       
       
          <H2 fontsizesecondary="h2-font-size-secondary">{props.title}</H2>
          <P align="align-primary">{props.subtitle}</P>
        
      </div>
    </NavLink>
  );
};
export default CardListen;