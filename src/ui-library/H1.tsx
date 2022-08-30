import React from "react";

function H1(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
    | any;
}) {
  return (
    <h1 className="text-5xl text-blue-700	font-semibold">{props.children}</h1>
  );
}

export default H1;
