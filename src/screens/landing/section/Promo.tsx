import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";

function Promo() {
  return (
    <div className="bg-background-promo bg-no-repeat  bg-bottom bg-contain h-screen ">
      <div className="flex justify-center">
        <div className="text-center">
          <H1 children="Be a pioneer" btn-primary />
          <H1 children="witch a new language!" />
        </div>
      </div>
      <div className="md:text-left sm:text-center md:mx-10 sm:mx-auto mt-10  grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 ">
        <H2
          children="Pioneer is an effective service for learning Vietnamese"
          fontsizeprimary="h2-font-ize-primary"
        />
      </div>
    </div>
  );
}

export default Promo;
