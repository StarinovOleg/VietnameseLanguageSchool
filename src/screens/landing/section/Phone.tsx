import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import  {converstation}  from "../../../store/static";

const cardItem=converstation.phone.group1.item.map((item)=>(
  <div className="  mr-10 mt-10 p-10 h-auto md:drop-shadow-xl sm:drop-shadow-none" key={item.text}>
    <p className="text-xl text-stone-500 font-semibold">{item.text}</p>
  </div>
  ))
function Phone() {
  return <div className="m-10 grid md:grid-cols-2 sm:grid-cols-2 gap-4 content mb-60 mt-60 ">
    <div className="">
      <H2 children={converstation.phone.group1.title}  fontsizeprimary="h2-font-ize-primary"/>
      {cardItem}
    </div>
    <div className="text-center">
      <H1 children={converstation.phone.group2.title}/>
      <div className="mt-10 ">
        <H2 children={converstation.phone.group2.subtitle}  fontsizeprimary="h2-font-ize-primary"/>
      </div>  
      <div className="mt-10 ">
        <img src={converstation.phone.group2.img}  className="md:mt-auto md:mb-auto w-10/12 p-10 "/>
      </div>
      <div className="md:flex">
        <div className="md:mt-auto md:mb-auto "><img src={converstation.phone.appstore} className="w-64 p-10" /></div>
        <div className="md:mt-auto md:mb-auto "><img src={converstation.phone.googlestore} className="w-64 p-4" /></div>
    </div>
    </div>
  </div>;
}

export default Phone;
