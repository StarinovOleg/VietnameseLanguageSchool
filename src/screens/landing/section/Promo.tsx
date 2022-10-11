import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import { converstation } from "../../../store/static";
function Promo() {
  return (
    <div className=" md:h-screen sm:h-auto">
        <div className="text-center">
          <H1 children={converstation.promo.title} btn-primary />
        </div>
      <div className="mt-20  text-center">
        <H2
          children={converstation.promo.subtitle}
          fontsizeprimary="h2-font-ize-primary"
        />
      </div>
      <img src={converstation.promo.img}  className="mt-10  md:w-6/12 sm:w-auto ml-auto mr-auto "/>
    </div>
  );
}

export default Promo;
