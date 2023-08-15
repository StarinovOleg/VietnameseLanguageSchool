import React from "react";
import { NavLink } from "react-router-dom";
import H2 from "../../../../ui-library/H2";
import P from "../../../../ui-library/P";
const Card = (props: {
  state?: { [key: string]: string };
  title?: string;
  src?: string;
  link?: any;
}) => {
  return (
    <NavLink to={`/${props.link}`} state={props.state}>
      <div className="border-solid rounded-xl cursor-pointer bg-orange-500 m-2 p-2   hover:md:shadow-lg hover:md:shadow-orange-800  hover:sm:drop-shadow-none flex h-32  flex-wrap ">
        <div className="flex-1  my-auto ">
          <img
            src={props.src}
            alt="icons"
            loading="lazy"
            className=" mx-auto"
          />
        </div>
        <div className="flex-1 my-auto">
          <H2
            fontsizesecondary="h2-font-size-secondary"
            fontcolorsecondary="text-white"
          >
            {props.title}
          </H2>
        </div>
      </div>
    </NavLink>
  );
};
export default Card;
