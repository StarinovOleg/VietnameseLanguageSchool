import React from "react";
import { lessons } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";
import img from '../../../assets/icons-lessons/unit1.png'

const card=[{
  id:1,
  to: '/learning',
  title: lessons.lesson_1.title,
  subtitle:lessons.lesson_1.subtitle, 
  src:lessons.lesson_1.img,
},{
  id:2,
  to: '/learning',
  title: lessons.lesson_1_1.title,
  subtitle:lessons.lesson_1_1.subtitle, 
  src:lessons.lesson_1_1.img,
},{
  id:3,
  to: '/learning',
  title: lessons.lesson_2.title,
  subtitle:lessons.lesson_2.subtitle, 
  src:lessons.lesson_2.img,
},{
  id:4,
  to: '/learning',
  title: lessons.lesson_2_2.title,
  subtitle:lessons.lesson_2_2.subtitle, 
  src:lessons.lesson_2_2.img,
},{
  id:5,
  to: '/learning',
  title: lessons.lesson_2_3.title,
  subtitle:lessons.lesson_2_3.subtitle, 
  src:lessons.lesson_2_3.img,
}]
const cardItem=card.map((item)=>
<Card to={item.to} title={item.title} subtitle={item.subtitle} src={item.src}   key={item.id}
state={{
        title: `${item.title}`,
        subtitle: `${item.subtitle}`,
      }}
/>)
function Lessons() {
  return (
    <div className="h-auto">
      <div className="md:mx-10 sm:mx-auto mt-60 text-center ">
        <H2
          children="Chose group words for training"
          fontsizeprimary="h2-font-ize-primary"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10">
      {cardItem}
      </div>
    </div>
  );
}

export default Lessons;
