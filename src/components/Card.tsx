import React from "react";
import { NavLink } from "react-router-dom";
import H2 from "../ui-library/H2";
import P from "../ui-library/P";
const Card = (props: { picture: any; to: string; state: any; title: any }) => {
  return (
    <div className="text-center border-solid rounded-xl cursor-pointer p-2 m-2  bg-background-item-card bg-no-repeat bg-top-bottom hover:bg-top">
      <div className="m-10">
        <NavLink to={props.to} state={props.state}>
          <H2>{props.title}</H2>
          <P align="align-primary">{props.picture}</P>
        </NavLink>
      </div>
    </div>
  );
};
export default Card;
