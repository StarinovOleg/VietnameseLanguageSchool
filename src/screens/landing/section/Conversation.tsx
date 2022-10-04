import React from "react";
import { converstation } from "../../../store/static";
import CardListen from "../../../components/CardListen";
import Section from "../../../components/Section";

const cardItem=converstation.conversation.item.map((item)=>(
<CardListen to={item.to} title={item.title} subtitle={item.subtitle} src={item.img}   key={item.id}
state={{
        title: `${item.title}`,
        subtitle: `${item.subtitle}`,
      }}
/>))
function Conversation() {
  return (
  <Section title={converstation.lessons.title}>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  m-10">
          {cardItem}
    </div>
  </Section>
  );
}

export default Conversation;