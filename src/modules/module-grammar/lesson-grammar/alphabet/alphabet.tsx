import React, { Fragment } from "react";
import { alphabet } from "../../dictionary-grammar/alphabet/alphabet";
import Main from "../../main";
import TonesItem from "./components-alphabet/TonesItem";
export default function Alphabet() {
  const block = alphabet.map((item: any, index: number) => {
    return (
      <Fragment key={index}>
        <TonesItem displayText={item.text} v={item.audio} />
      </Fragment>
    );
  });
  return (
    <Main>
      <div className="text-4xl my-4 p-10" style={{ whiteSpace: "pre-wrap" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6  m-10 flex">
          {block}
        </div>
      </div>
    </Main>
  );
}
