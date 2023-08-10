import React, { MouseEventHandler } from "react";
import ButtonSound from "../../../ui-library/buttons/ButtonSound";

function DisplayWordBlock(props: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  word?: string;
  wordCheck: string;
  picture?: string;
  example?: string;
}) {
  return (
    <>
      <div className="leading-[3rem] text-4xl">{props.word}</div>
      <div className="leading-[3rem] text-2xl text-rose-800">
        {props.wordCheck}
      </div>
      <div className="inline-block pt-10 hidden lg:block md:block">
        <img
          src={props.picture}
          className="mr-auto ml-auto w-10"
          alt="icon words"
        />
      </div>
      <div className="text-blue-500 p-10 hidden lg:block md:block">
        <span className="text-xl p-2">{props.example}</span>
      </div>
      <ButtonSound onClick={props.onClick} />
    </>
  );
}

export default DisplayWordBlock;
