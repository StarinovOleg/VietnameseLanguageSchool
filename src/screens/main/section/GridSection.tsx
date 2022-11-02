import React from "react";
import H2 from "../../../ui-library/H2";

const GridSection = (props: { children: any;title: any , fontcolorsecondary?:any, id?:string, children_header?:any, onClick?:any }) => {
  return (

<div className="grid grid-rows-2 gap-4 h-auto" id={props.id} >
  <div className="row-span-2 ">  
  <div className="flex justify-center flex-wrap pt-20">
    <div onClick={props.onClick}>{props.children_header}</div>
    <H2
          children={props.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary mt-6"
          fontcolorsecondary={props.fontcolorsecondary}
    />
  </div>
  <div className="pt-10">
    {props.children}
  </div>
    
  </div>
</div>

  );
};
export default GridSection;
