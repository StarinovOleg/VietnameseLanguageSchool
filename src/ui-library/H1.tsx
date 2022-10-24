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
    <h1 className="lg:text-[48px] md:text-[20px] sm:text-[20px] text-[#260105]	font-semibold  lg:leading-[6rem] md:leading-[2rem] sm:leading-[1rem]">
      {props.children}
    </h1>
  );
}

export default H1;
