import React from "react";
import H2 from "../ui-library/H2";

const Section = (props: { children: any;title: any , fontcolorsecondary?:any, id?:string, children_header?:any, onClick?:any }) => {
  return (

<div className="grid grid-rows-2 gap-4 h-auto  mt-20 " id={props.id} >
  <div className="row-span-2 mt-20">  
  <div className="flex justify-center flex-wrap ml-4 mr-4">
    <div onClick={props.onClick}>{props.children_header}</div>
    <div className="mt-6">
    <H2
          children={props.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
          fontcolorsecondary={props.fontcolorsecondary}
    /></div>
  </div>
    {props.children}
  </div>
</div>

  );
};
export default Section;
