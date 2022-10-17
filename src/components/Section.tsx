import React from "react";
import H2 from "../ui-library/H2";

const Section = (props: { children: any;title: any , fontcolorsecondary?:any }) => {
  return (
    <div className="h-auto">
      <div className="md:mx-10 sm:mx-auto mt-60 text-center ">
        <H2
          children={props.title}
          fontsizeprimary="h2-font-ize-primary"
          fontcolorsecondary={props.fontcolorsecondary}
        />
      </div>
      
      {props.children}
   
    </div>
  );
};
export default Section;
