import React from "react";
import H2 from "../../../../ui-library/H2";
import  {converstation}  from "../../../../store/static";
import CardDemoAudio from "./CardDemoAudio";
import AudioAnimation from "./AudioAnimation";
import Link from "../../../../ui-library/Link";
import Section from "../../../main/section/Section";

const DemoAudio = (props:{id?:string;}) => {
    
    const cardItem=converstation.demo_audio.audio.map((item, index)=>(
       <CardDemoAudio
        text={item.name} 
        shadowcolor='shadow-[#529312]'
        color={item.color}
        key={index}
        item={item.audio}
        />  
      
        ))
        
  return (
    <Section>
    <div className="text-center" id={props.id}>
        <H2
          children={converstation.demo_audio.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
          fontcolorsecondary='text-[#FBE754]'
        />
        <H2
          children={converstation.demo_audio.subtitle}
          fontsizeprimary="lg:leading-[10rem] lg:h2-font-size-primary  sm:h2-font-size-secondary"
          fontcolorsecondary='text-lime-800'
          fontfamilysecondary="font-['KGLifeisMessy']"
        />
 
        <AudioAnimation/>
        <div className="flex flex-wrap justify-center">
            {cardItem}
        </div>
        
        <Link to='/training' children={converstation.landing.continue} align='text-right' secondary_color='text-[#800000]'
              state={{
                title: `${converstation.conversation.title}`,
              }}
        />
       </div>
    </Section>
  );
};
export default DemoAudio;