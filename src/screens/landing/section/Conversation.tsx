import React from "react";
import { converstation } from "../../../store/static";
import CardListen from "../../../components/CardListen";
import H2 from "../../../ui-library/H2";


const cardlisten=[{
  id:1,
  to: '/conversation',
  title: converstation.hello.title,
  subtitle:converstation.hello.subtitle, 
  src:converstation.hello.img,
},{
  id:2,
  to: '/conversation',
  title: converstation.where_you_from.title,
  subtitle:converstation.where_you_from.subtitle, 
  src:converstation.where_you_from.img,
},{
  id:3,
  to: '/conversation',
  title: converstation. what_is.title,
  subtitle:converstation. what_is.subtitle, 
  src:converstation. what_is.img,
},{
  id:4,
  to: '/conversation',
  title: converstation.introduce_yourself.title,
  subtitle:converstation.introduce_yourself.subtitle, 
  src:converstation.introduce_yourself.img,
},{
  id:5,
  to: '/conversation',
  title: converstation.start_conversation.title,
  subtitle:converstation.start_conversation.subtitle, 
  src:converstation.start_conversation.img,
}]
const cardItem=cardlisten.map((item)=>(
<CardListen to={item.to} title={item.title} subtitle={item.subtitle} src={item.src}   key={item.id}
state={{
        title: `${item.title}`,
        subtitle: `${item.subtitle}`,
      }}
/>))
function Conversation() {
  return (
    <div className="h-auto">
      <div className="md:mx-10 sm:mx-auto mt-60 text-center ">
              <H2
          children="Listen to the conversation"
          fontsizeprimary="h2-font-ize-primary"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  m-10">
          {cardItem}
      </div>
    </div>
  );
}

export default Conversation;