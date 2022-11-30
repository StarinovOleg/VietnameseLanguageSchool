import React, { MouseEventHandler } from "react";
import ButtonSound from "../../../ui-library/ButtonSound";

function DisplayWordBlock(props: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  audio?: any;
  word?: string;
  picture?: string;
  example?: string;
}) {
  return (
    <>
      <div className="leading-[3rem]">{props.word}</div>
      <div className="inline-block pt-10 hidden lg:block md:block">
        <img src={props.picture} className="mr-auto ml-auto" />
      </div>
      <div className="text-blue-500 p-10 hidden lg:block md:block">
        <span className="text-xl p-2">{props.example}</span>
      </div>
      <ButtonSound onClick={props.onClick} />
    </>
  );
}

export default DisplayWordBlock;
