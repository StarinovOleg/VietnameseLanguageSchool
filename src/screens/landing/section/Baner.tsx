import React from "react";
import { lessons } from "../../../store/static";
import Card from "../../../components/Card";
import H2 from "../../../ui-library/H2";
import grammar from '../../../assets/baner-section/grammar.png'
import listening from '../../../assets/baner-section/listening.png'
import practice from '../../../assets/baner-section/practice.png'
const pictures=[{
  id:1,
  src:listening,
  title:"Listening",
  text: "Practice pronunciation by listening to dialogues and texts"
},{
  id:2,
  src:grammar,
  title:"Grammar",
  text: "Learn about the features of a language by studying its grammar and doing grammar exercises"
},{
  id:3,
  src:practice,
  title:"Practice",
  text: "Memorize new words with the help of tests in a playful way"
}]
const pictureItem=pictures.map((item)=>
<div className="text-center bg-slate-100 border-solid rounded-xl mr-10 ml-10 p-10" key={item.id}>
<H2
children={item.title}
fontsizeprimary="h2-font-ize-primary"
/>
<img src={item.src}  className="md:mt-auto md:mb-auto w-32 ml-auto mr-auto pt-10"/>
<p className="text-xl text-stone-500 font-semibold  ml-auto  pt-10">{item.text}</p>
</div>
)
function Baner() {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mb-60 mt-60">
        {pictureItem}
      </div>
   
  );
}

export default Baner;