import React from "react";
import H2 from "../../../../ui-library/H2";
import  {converstation}  from "../../../../store/static";
import CardDemoAudio from "./CardDemoAudio";
import AudioAnimation from "./AudioAnimation";


const DemoAudio = () => {
    
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
    <div className=" text-center lg:p-20 p-4">
        <H2
          children={converstation.demo_audio.title}
          fontsizeprimary="lg:h2-font-size-primary sm:h2-font-size-secondary"
          fontcolorsecondary=''
        />
        <H2
          children={converstation.demo_audio.subtitle}
          fontsizeprimary="lg:leading-[10rem] lg:h2-font-size-primary  sm:h2-font-size-secondary"
          fontcolorsecondary='text-[#529312]'
          fontfamilysecondary="font-['KGLifeisMessy']"
        />
 
        <AudioAnimation/>
        <div className="flex flex-wrap justify-center">
            {cardItem}
        </div>
       
    </div>
  );
};
export default DemoAudio;