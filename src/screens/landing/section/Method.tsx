import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import  {converstation}  from "../../../store/static";

const cardItem=converstation.method.group1.item.map((item)=>(
  <div className="p-10 h-auto md:drop-shadow-xl sm:drop-shadow-none " key={item.text}>
    <p className="text-xl text-stone-500 font-semibold">{item.text}</p>
  </div>
  ))
function Method() {
  return (
    <>
    <div className="text-center">
        <H2
          children={converstation.method.group1.title}
          fontsizeprimary="h2-font-ize-primary"
        />
    </div>
    <div className="flex flex-wrap justify-center">
      {cardItem}
    </div>
    </>
  )

}

export default Method;
