import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import { converstation } from "../../../store/static";
import Typewriter from 'typewriter-effect';
import { HashLink as Link } from 'react-router-hash-link';
import Section from "../../main/section/Section";

function Promo() {
  return (
    <Section>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 " >
      <div>
        <div className="h-24 md:h-20 lg:h-96">
          <H1 children={<Typewriter
            options={{
              strings: [`${converstation.promo.title}`,`${converstation.promo.title_vietnamese}`],
              autoStart: true,
              loop: true,
            }}
          />} btn-primary  
          />          
        </div>

          <H2
           
            fontsizeprimary="h2-font-size-primary"
            fontfamilysecondary='font-sans'
            fontcolorsecondary='text-stone-500'
          > 
          {converstation.promo.subtitle.slice(0,6)}
            <span className="font-['Mochiy'] text-lime-800">
            {converstation.promo.subtitle.slice(6,27)}
            </span>
          {converstation.promo.subtitle.slice(27,52)}
            <span className="span_promo text-[#ba4e4a]">
              {converstation.promo.subtitle.slice(52,56)}
            </span>
          {converstation.promo.subtitle.slice(56,converstation.promo.subtitle.length)}
          </H2>
          <div className="flex justify-center">
            <Link to="/landing#demo_audio" className="border-2 border-lime-500  hover:border-lime-800 rounded-lg  m-5 p-2 text-xl  text-lime-500 hover:text-lime-800 font-['KGLifeisMessy'] ">listen sound</Link>
            <Link to="/landing#demo_test" className="border-2 border-sky-500 hover:border-sky-800 rounded-lg m-5 p-2 text-xl text-sky-500  hover:text-sky-800 font-['KGLifeisMessy']">start learning</Link>
          </div>
        

      </div>
      <img src={converstation.promo.img}   className="mt-[20%] w-10/12 ml-auto mr-auto mb-auto mt-auto"/>
    </div>
    </Section>
  )
}

export default Promo;
