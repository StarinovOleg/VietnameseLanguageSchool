import React from "react";

function H2(props: {
  fontsizesecondary?: string;
  fontsizeprimary?: string;
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
    <h2
      className={`${props.fontsizesecondary} ${props.fontsizeprimary} text-yellow-500 font-semibold`}
    >
      {props.children}
    </h2>
  );
}

export default H2;
