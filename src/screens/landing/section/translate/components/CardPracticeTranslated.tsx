import React from "react";
import { NavLink } from "react-router-dom";
import H2 from "../../../../../ui-library/H2";

const CardpracticeTranslated = (props: {
  state: { [key: string]: string };
  title: string;
}) => {
  return (
    <NavLink to="/translated" state={props.state}>
      <div className="border-solid rounded-xl cursor-pointer bg-rose-700 m-2 p-2 h-auto  hover:md:shadow-lg hover:md:shadow-red-700  hover:sm:drop-shadow-none ">
        <H2
          fontsizesecondary="h2-font-size-secondary"
          fontcolorsecondary="text-white"
        >
          {props.title}
        </H2>
      </div>
    </NavLink>
  );
};
export default CardpracticeTranslated;
