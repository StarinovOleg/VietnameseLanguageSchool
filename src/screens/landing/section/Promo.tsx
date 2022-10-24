import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import { converstation } from "../../../store/static";
import Typewriter from 'typewriter-effect';
function Promo() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 h-screen  text-center ml-10 mr-10 ">
      <div className="text-center sm:text-left mt-[20%]">
        <div className="h-3/6  ">
          <H1 children={<Typewriter
            options={{
              strings: [`${converstation.promo.title}`],
              autoStart: true,
              loop: true,
            }}
          />} btn-primary  />
        </div>
        <div className="lg:mt-20 md:mt-0 sm:mt-0">    
              <H2
            children={converstation.promo.subtitle}
            fontsizeprimary="h2-font-ize-primary"
            fontfamilysecondary='font-sans'
            fontcolorsecondary='text-stone-500'
          />

        </div>
      </div>
      <img src={converstation.promo.img}   className="mt-[20%] w-10/12 ml-auto mr-auto"/>
    </div>
  )
}

export default Promo;
