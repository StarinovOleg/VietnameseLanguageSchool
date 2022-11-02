import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import { converstation } from "../../../store/static";
import Typewriter from 'typewriter-effect';
import { HashLink as Link } from 'react-router-hash-link';

function Promo() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:h-screen sm:h-auto text-center ml-10 mr-10 " >
      <div className="text-center sm:text-left lg:mt-[20%] sm:mt-0">
        <div className="lg:h-3/6 md:h-3/6 sm:h-auto  sm:mt-0 sm:mt-auto">
          <H1 children={<Typewriter
            options={{
              strings: [`${converstation.promo.title}`,`${converstation.promo.title_vietnamese}`],
              autoStart: true,
              loop: true,
            }}
          />} btn-primary  />
        </div>
        <div className="h-3/6 lg:mt-20 sm:mt-0">    
          <H2
           
            fontsizeprimary="h2-font-size-primary"
            fontfamilysecondary='font-sans'
            fontcolorsecondary='text-stone-500'
          > 
          {converstation.promo.subtitle.slice(0,6)}
            <span className="font-['Mochiy'] text-[#529312]">
            {converstation.promo.subtitle.slice(6,27)}
            </span>
          {converstation.promo.subtitle.slice(27,52)}
            <span className="span_promo text-[#ba4e4a]">
              {converstation.promo.subtitle.slice(52,56)}
            </span>
          {converstation.promo.subtitle.slice(56,converstation.promo.subtitle.length)}
          </H2>
        <div className="flex justify-center">
          <Link to="/landing#demo_audio" className="border-2 border-[#529312]  hover:border-lime-800 rounded-lg  m-5 p-2 text-xl  text-[#529312] hover:text-lime-800 font-['KGLifeisMessy'] ">listen sound</Link>
          <Link to="/landing#demo_test" className="border-2 border-[#1572E0] hover:border-blue-800 rounded-lg m-5 p-2 text-xl text-[#1572E0]  hover:text-blue-800 font-['KGLifeisMessy']">start learning</Link>
        </div>
        </div>

      </div>
      <img src={converstation.promo.img}   className="mt-[20%] w-10/12 ml-auto mr-auto mb-auto mt-auto"/>
    </div>
  )
}

export default Promo;
