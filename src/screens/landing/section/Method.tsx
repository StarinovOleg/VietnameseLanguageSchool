import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import  {converstation}  from "../../../store/static";
import Section from "../../../components/Section";
const cardItem=converstation.method.group1.item.map((item, index)=>(
  <div className="p-10 h-auto md:drop-shadow-xl sm:drop-shadow-none flex " key={index}>
    <img src={converstation.method.img} alt="logo" className="w-12 h-12 mt-4 " />{index==1?(<img src={converstation.method.img} alt="logo" className="w-12 h-12 mt-4 " />):null}
    <p className="text-xl text-stone-500 font-semibold mt-6">{item.text}</p>
  </div>
  ))
function Method() {
  return (
    <Section title={converstation.method.group1.title}  >
    <div className="flex flex-wrap justify-center">
      {cardItem}
    </div>
    </Section>
  )

}

export default Method;
