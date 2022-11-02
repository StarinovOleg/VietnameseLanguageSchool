import React, {useState} from "react";
import { converstation } from "../../../store/static";
import Section from "../../../components/Section";
import Link from "../../../ui-library/Link";
import { cardItemPracticeTranslated } from "../../practice_translated/components/List";
import SupportWindow from "../../../components/SupportWindow";

const children_header=(<img src={converstation.practice_translate.section_img} alt="logo" className="w-24 h-24 ml-4 mr-4" />)
function Conversation(props:{id?:string;}) {
  const[hover, setHover]=useState(false)
  const onClick=()=>{
    if(!hover) setHover(true);
    else setHover(false);
  }
  return (
  <Section title={converstation.practice_translate.title} fontcolorsecondary='text-rose-700' id = {props.id} children_header={children_header} onClick={onClick}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10 relative">
      {hover && (
          <SupportWindow position={'absolute'} 
          text={converstation.support_window.text_translate} color='text-rose-700' 
          img={converstation.support_window.img_translate}
          shadowcolor='shadow-rose-700'
          onClick={onClick}
          />
        )}       
        {cardItemPracticeTranslated.slice(0, 8)}
      </div>
    <div className="m-10 relative">
      <Link to='/training' children={converstation.landing.continue} align='align-right-side' secondary_color='text-rose-700'
        state={{
          title: `${converstation.practice_translate.title}`,
        }}
      />
    </div>
  </Section>
  );
}

export default Conversation;