import React from "react";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
function About() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 text-center">
        <div>
          <p>Free access</p>
          <p>Our mission is to make language learning accessible to everyone</p>
        </div>
        <div>
          <p>Learning in the game</p>
          <p>Game mechanics proven effective for all ages</p>
        </div>
      </div>
    </div>
  );
}

export default About;
