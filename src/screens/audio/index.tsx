import React, { Fragment } from "react";

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
  array_data: string;
}
const tones = Object.entries(pronunciation).map(([k, v]) => (
  <Table k={k} v={v} key={v} />
));

function AudioIndex() {
  const location = useLocation();
  const state = location.state as location;
  let arr: Array<any> = [];

  //dynamic words display
  const displayWords = () => {
    if (state?.title) {
      arr = JSON.parse(state.array_data);
      console.log(arr);
    }
  };
  displayWords();
  return (
    <>
      {arr.length !== 0 && state?.title ? (
        <BodyPractice>
          <div
            className="text-4xl my-4 p-10"
            style={{ whiteSpace: "pre-wrap" }}
          >
            <H1 children={state.title} />
            <>
              {state.title !== converstation.audio.lessons[5].title ? (
                <>
                  {arr.map((display, index) => (
                    <DisplayBlock
                      key={index}
                      word={display.text}
                      audio={display.audio}
                    />
                  ))}
                </>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10 flex">
                  {tones}
                </div>
              )}
            </>
          </div>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default AudioIndex;
