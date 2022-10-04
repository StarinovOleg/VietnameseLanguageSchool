import React from "react";
import { NavLink } from "react-router-dom";

function Link(props: {
  to: string;
  state?: any;
  align?:string;
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
    <NavLink to={props.to} state={props.state}>
      <p className={`text-2xl text-lime-500 font-semibold absolute  ${props.align}`}>{props.children}</p>
    </NavLink>
  );
}

export default Link;