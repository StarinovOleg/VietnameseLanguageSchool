import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
function About() {
  return (
    <div className="mt-20 mb-20">
      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="bg-background-about bg-no-repeat bg-center hover:bg-top h-52">
          <p className="mt-10 font-['Mochiy'] text-3xl text-yellow-500">
            Free access
          </p>
          <p className="p-10 inline-block w-9/12 text-xl decoration-[#260105]">
            Our mission is to make language learning accessible to everyone
          </p>
        </div>
        <div className="bg-background-about bg-no-repeat bg-center hover:bg-top h-52">
          <p className="mt-10 font-['Mochiy'] text-3xl text-yellow-500">
            Learning in the game
          </p>
          <p className="p-10 inline-block w-9/12 text-xl decoration-[#260105]">
            Game mechanics proven effective for all ages
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
