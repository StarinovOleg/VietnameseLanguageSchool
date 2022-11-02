import React from "react";

function H2(props: {
  fontsizesecondary?: string;
  fontsizeprimary?: string;
  fontcolorsecondary?:string;
  fontfamilysecondary?:string;
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
      className={`${props.fontsizesecondary} ${props.fontsizeprimary} ${props.fontcolorsecondary} ${props.fontfamilysecondary} font-semibold`}
    >
      {props.children}
    </h2>
  );
}

export default H2;
