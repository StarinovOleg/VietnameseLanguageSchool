import React from "react";

import { converstation_1 } from "../../dictionary/unit-1/converstation_1";
import { converstation_2 } from "../../dictionary/unit-2/converstation_2";
import { useLocation } from "react-router-dom";
import { converstation } from "../../store/static";
import Error from "../main/error/Error";
import DisplayBlock from "./components/DisplayBlock";
import Table from "./components/Table";
import { pronunciation } from "../../dictionary/unit-1/pronunciation";
import H1 from "../../ui-library/H1";
import BodyPractice from "../main/body/body_practice";

interface location {
  title: string;
}
const tones = Object.entries(pronunciation).map(([k, v]) => (
  <Table k={k} v={v} key={v} />
));

function AudioIndex() {
  const location = useLocation();
  const state = location.state as location;
  //dynamic words display
  const displayWords = () => {
    switch (state?.title) {
      case converstation.audio.lessons[0].title:
        return (
          <DisplayBlock
            word={converstation_1.converstation_1_1.text}
            audio={converstation_1.converstation_1_1.audio}
          />
        );
      case converstation.audio.lessons[1].title:
        return (
          <DisplayBlock
            word={converstation_1.converstation_1_2.text}
            audio={converstation_1.converstation_1_2.audio}
          />
        );
      case converstation.audio.lessons[2].title:
        return (
          <DisplayBlock
            word={converstation_2.converstation_2_1.text}
            audio={converstation_2.converstation_2_1.audio}
          />
        );
      case converstation.audio.lessons[3].title:
        return (
          <DisplayBlock
            word={converstation_2.converstation_2_2.text}
            audio={converstation_2.converstation_2_2.audio}
          />
        );
      case converstation.audio.lessons[4].title:
        return (
          <DisplayBlock
            word={converstation_2.converstation_2_3.text}
            audio={converstation_2.converstation_2_3.audio}
          />
        );
      case converstation.audio.lessons[5].title:
        return (
          <>
            <H1 children={state.title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10 flex">
              {tones}
            </div>
          </>
        );
    }
  };
  return (
    <>
      {state?.title ? (
        <BodyPractice>
          <div
            className="text-4xl my-4 p-10"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {displayWords()}
          </div>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default AudioIndex;
