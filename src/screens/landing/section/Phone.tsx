import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import phone from '../../../assets/phone.png'
import appstore from '../../../assets/app-store-badge.png'
import googlestore from '../../../assets/google-play-badge.png'
import P from "../../../ui-library/P";
function Phone() {
  return <div className="m-10 grid md:grid-cols-2 sm:grid-cols-2 gap-4 content mb-60 mt-60 ">
    <div>
      <H2 children="2 step for first result:"  fontsizeprimary="h2-font-ize-primary"/>
      <div className="  mr-10 mt-10 p-10 h-auto md:drop-shadow-xl sm:drop-shadow-none">
        <p className="text-xl text-stone-500 font-semibold">Chose first group words for training.</p>
      </div>
      <div className=" mr-10 mt-10 p-10 h-auto md:drop-shadow-xl sm:drop-shadow-none">
        <p className="text-xl text-stone-500 font-semibold">Chose dialog for listen and repeat.</p>
      </div>
    </div>
    <div className="">
      <H1 children="Always with you"/>
      <div className="mt-10 ">
        <H2 children="Practice on any device"  fontsizeprimary="h2-font-ize-primary"/>
      </div>  
      <div className="mt-10 ">
        <img src={phone}  className="md:mt-auto md:mb-auto w-10/12 p-10 "/>
      </div>
      <div className="md:flex">
        <div className="md:mt-auto md:mb-auto "><img src={appstore} className="w-64 p-10" /></div>
        <div className="md:mt-auto md:mb-auto "><img src={googlestore} className="w-64 p-4" /></div>
    </div>
    </div>
  </div>;
}

export default Phone;
