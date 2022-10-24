import React from "react";
import H2 from "../ui-library/H2";

const Section = (props: { children: any;title: any , fontcolorsecondary?:any, id?:string }) => {
  return (

<div className="grid grid-rows-2 gap-4 h-auto  mt-20 " id={props.id} >
  <div className="row-span-3 text-center mt-20">  
    <H2
          children={props.title}
          fontsizeprimary="h2-font-ize-primary"
          fontcolorsecondary={props.fontcolorsecondary}
    />
  </div>
  <div className="row-span-2 " >{props.children}</div>
</div>

  );
};
export default Section;
