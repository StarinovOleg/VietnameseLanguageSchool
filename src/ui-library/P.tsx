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
  align: string;
}) {
  return (
    <p className={`text-xl text-fuchsia-800 font-semibold ${props.align}`}>
      {props.children}
    </p>
  );
}

export default P;
