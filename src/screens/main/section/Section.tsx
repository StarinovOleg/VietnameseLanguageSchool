import React from "react";

function Section(props: {
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
    <div className="mx-10 my-20 md:my-20 lg:my-[8rem]">{props.children}</div>
  );
}

export default Section;
