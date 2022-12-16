import React from "react";
import { NavLink } from "react-router-dom";
import H2 from "../../../../../ui-library/H2";
import P from "../../../../../ui-library/P";
const CardAudio = (props: {
  subtitle: string;
  state: any;
  title: string;
  src: any;
}) => {
  return (
    <NavLink to="/audio" state={props.state}>
      <div className=" border-solid rounded-xl cursor-pointer bg-lime-500 m-2 p-2 h-auto  hover:sm:drop-shadow-none text-center hover:md:shadow-lg hover:md:shadow-lime-800">
        <img
          src={props.src}
          alt="picture to topic words card"
          className="md:mt-auto md:mb-auto ml-auto mr-auto"
          loading="lazy"
        />
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
    </NavLink>
  );
};
export default CardAudio;
