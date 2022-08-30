import React from "react";

function H2(props: {
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
    <h2 className="text-3xl text-yellow-500 font-semibold">{props.children}</h2>
  );
}

export default H2;
