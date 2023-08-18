import React from "react";
import { NavLink } from "react-router-dom";

function Link(props: {
  state?: { [key: string]: string };
  align?: string;
  secondary_color?: string;
  identificator?: string;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <NavLink to={`/listlessons/${props.identificator}`} state={props.state}>
      <p
        className={`lg:text-2xl md:text-2xl text-xl text-lime-500 font-semibold underline decoration-2 hover:text-stone-500 ${props.align} ${props.secondary_color}`}
      >
        {props.children}
      </p>
    </NavLink>
  );
}

export default Link;
