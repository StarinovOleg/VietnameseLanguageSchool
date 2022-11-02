import React, { useState } from "react";
import { converstation } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";
import Section from "../../../components/Section";
import Link from "../../../ui-library/Link";
import { cardItemLesson } from "../../learning/components/Lists";
import SupportWindow from "../../../components/SupportWindow";

const children_header=(<img src={converstation.lessons.section_img} alt="logo" className="w-24 h-24 ml-4 mr-4" />)
function Lessons(props:{id?:string;}) {
  const[hover, setHover]=useState(false)

  const onClick=()=>{
    if(!hover) setHover(true);
    else setHover(false);
  }
  return (
    <Section title={converstation.lessons.title} fontcolorsecondary='text-sky-800' id={props.id}
     children_header={children_header} onClick={onClick}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10 relative" >
        {hover && (
          <SupportWindow position={'absolute'} 
          text={converstation.support_window.text_word} color='text-[#075985]' 
          img={converstation.support_window.img_word}
          shadowcolor='shadow-cyan-500/50'
          onClick={onClick}
          />
        )}
        {cardItemLesson.slice(0, 8)}
      </div>
      <div className="m-10 relative">
        <Link to='/training' children={converstation.landing.continue} align='align-right-side' secondary_color='text-sky-800'
              state={{
                title: `${converstation.lessons.title}`,
              }}
        />
      </div>
    </Section>
  );
}

export default Lessons;
