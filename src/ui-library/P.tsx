import React from "react";

function P(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  align?: string;
  color?:string
}) {
  return (
    <p className={`text-xl font-semibold ${props.align} ${props.color}`}>
      {props.children}
    </p>
  );
}

export default P;
