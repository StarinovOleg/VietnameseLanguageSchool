import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import background_promo from '../../../assets/background_promo.png'
function Promo() {
  return (
    <div className=" md:h-screen sm:h-auto">
      <div className="flex justify-center">
        <div className="text-center">
          <H1 children="Be a pioneer" btn-primary />
          <H1 children="witch a new language!" />
        </div>
      </div>
      <div className="mt-20  text-center">
        <H2
          children="Pioneers is an effective service for learning Vietnamese"
          fontsizeprimary="h2-font-ize-primary"
        />
      </div>
      <img src={background_promo}  className="mt-10  md:w-6/12 sm:w-auto ml-auto mr-auto "/>
    </div>
  );
}

export default Promo;
