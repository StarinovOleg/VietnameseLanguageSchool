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
  title:"Listening"
},{
  id:2,
  src:grammar,
  title:"Grammar"
},{
  id:3,
  src:practice,
  title:"Practice"
}]
const pictureItem=pictures.map((item)=>
<div className="text-center " key={item.id}>
<H2
children={item.title}
fontsizeprimary="h2-font-ize-primary"
/>
<img src={item.src}  className="md:mt-auto md:mb-auto w-32 ml-auto mr-auto pt-10"/></div>)
function Baner() {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mb-60 mt-60">
        {pictureItem}
      </div>
   
  );
}

export default Baner;