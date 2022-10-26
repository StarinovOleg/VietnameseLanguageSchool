import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import { converstation } from "../../../store/static";
import Typewriter from 'typewriter-effect';
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
            children={converstation.promo.subtitle}
            fontsizeprimary="h2-font-size-primary"
            fontfamilysecondary='font-sans'
            fontcolorsecondary='text-stone-500'
          />

        </div>
      </div>
      <img src={converstation.promo.img}   className="mt-[20%] w-10/12 ml-auto mr-auto mb-auto mt-auto"/>
    </div>
  )
}

export default Promo;
