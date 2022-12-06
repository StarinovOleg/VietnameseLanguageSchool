import React from "react";
import H2 from "../../../ui-library/H2";

const GridSection = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactFragment
    | React.ReactPortal
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
  title: string;
  fontcolorsecondary?: string;
  id?: string;
  children_header?:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  onClick?: any;
}) => {
  return (
    <div className="grid grid-rows-2 gap-4 h-auto" id={props.id}>
      <div className="row-span-2 ">
        <div className="flex justify-center flex-wrap pt-20">
          <div onClick={props.onClick}>{props.children_header}</div>
          <H2
            children={props.title}
            fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary mt-6"
            fontcolorsecondary={props.fontcolorsecondary}
          />
        </div>
        <div className="pt-10">{props.children}</div>
      </div>
    </div>
  );
};
export default GridSection;
