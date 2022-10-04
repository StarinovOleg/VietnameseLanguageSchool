import React from "react";
import { converstation } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";
import Section from "../../../components/Section";
import Link from "../../../ui-library/Link";


const cardItem=converstation.lessons.lessons.slice(0, 8).map((item)=>
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
      <div className="m-10 relative">
        <Link to='/learning' children={converstation.landing.continue} align='align-right-side'
              state={{
                title: `${converstation.lessons.title}`,
              }}
        />
      </div>
    </Section>
  );
}

export default Lessons;
