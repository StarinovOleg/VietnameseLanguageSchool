import React from "react";
import { NavLink } from "react-router-dom";
import H2 from "../ui-library/H2";
import P from "../ui-library/P";
import img from '../assets/icons-lessons/unit1.png'
const Card = (props: { subtitle: any; to: string; state: any; title: any, src:any }) => {
  return (
    <NavLink to={props.to} state={props.state}>
      <div className="border-solid rounded-xl cursor-pointer bg-gradient-to-b from-cyan-500 to-blue-500 m-2 p-2 h-auto  hover:md:shadow-lg hover:md:shadow-cyan-500/50  hover:sm:drop-shadow-none flex flex-wrap">
        <div className="flex-none">
          <img src={props.src} alt='icons'/>
        </div>
        <div className="flex-1">
          <H2 fontsizesecondary="h2-font-size-secondary">{props.title}</H2>
          <P align="align-primary">{props.subtitle}</P>
        </div>
      </div>
    </NavLink>
  );
};
export default Card;
