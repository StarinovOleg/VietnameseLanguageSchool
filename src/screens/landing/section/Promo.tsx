import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";

function Promo() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="ml-40 mt-20 w-1/2">
          <H1 children="Be a pioneer" />
          <H1 children="witch a new language!" />
        </div>
      </div>
      <div className="ml-80 mt-20 mb-20 w-4/12">
        <H2 children="Pioneer is an effective service for learning Vietnamese" />
      </div>
    </>
  );
}

export default Promo;
