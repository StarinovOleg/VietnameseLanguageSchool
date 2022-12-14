import React from "react";
import { NavLink } from "react-router-dom";
import H2 from "../../../../../ui-library/H2";
import P from "../../../../../ui-library/P";
const Card = (props: {
  subtitle: string;
  state: { [key: string]: string };
  title: string;
  src: string;
}) => {
  return (
    <NavLink to="/words" state={props.state}>
      <div className="border-solid rounded-xl cursor-pointer bg-sky-500 m-2 p-2 h-auto  hover:md:shadow-lg hover:md:shadow-sky-800  hover:sm:drop-shadow-none flex flex-wrap">
        <div className="flex-none">
          <img src={props.src} alt="icons" loading="lazy" />
        </div>
        <div className="flex-1">
          <H2
            fontsizesecondary="h2-font-size-secondary"
            fontcolorsecondary="text-white"
          >
            {props.title}
          </H2>
          <P align="align-primary" color={"text-fuchsia-800"}>
            {props.subtitle}
          </P>
        </div>
      </div>
    </NavLink>
  );
};
export default Card;
