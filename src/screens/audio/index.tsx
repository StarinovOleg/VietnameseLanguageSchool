import React, { lazy } from "react";

import { useLocation } from "react-router-dom";
import { converstation } from "../../store/static";
import H1 from "../../ui-library/H1";
import BodyPractice from "../main/body/body_practice";

const DisplayBlock = lazy(() => import("./components/DisplayBlock"));
const Table = lazy(() => import("./components/Table"));
const Error = lazy(() => import("../main/error/Error"));

interface location {
  title: string;
  array_data: string;
}
const tones = Object.entries(converstation.audio.lessons[5].array_data).map(
  ([k, v]) => <Table k={k} v={v} key={v} />
);

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
                <>
                  <H1 children={state.title} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10 flex">
                    {tones}
                  </div>
                </>
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
