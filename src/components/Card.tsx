import React from "react";
import { NavLink } from "react-router-dom";
import H2 from "../ui-library/H2";
import P from "../ui-library/P";
const Card = (props: { picture: any; to: string; state: any; title: any }) => {
  return (
    <NavLink to={props.to} state={props.state}>
      <div className=" border-solid rounded-xl cursor-pointer bg-indigo-50 m-2 p-2  md:h-28 sm:h-auto md:drop-shadow-xl sm:drop-shadow-none">
        <H2 fontsizesecondary="h2-font-size-secondary">{props.title}</H2>
        <P align="align-primary">{props.picture}</P>
      </div>
    </NavLink>
  );
};
export default Card;
