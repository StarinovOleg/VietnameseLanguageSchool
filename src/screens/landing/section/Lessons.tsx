import React from "react";
import { converstation } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";
import Section from "../../../components/Section";


const cardItem=converstation.lessons.lessons.map((item)=>
<Card to={item.to} title={item.title} subtitle={item.subtitle} src={item.img}   key={item.id}
state={{
        title: `${item.title}`,
        subtitle: `${item.subtitle}`,
      }}
/>)
function Lessons() {
  return (
    <Section title={converstation.lessons.title}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10">
        {cardItem}
      </div>
    </Section>
  );
}

export default Lessons;
