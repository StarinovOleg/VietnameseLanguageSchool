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
    <h1 className="md:text-5xl text-[#260105]	font-semibold sm:text-xl">
      {props.children}
    </h1>
  );
}

export default H1;
