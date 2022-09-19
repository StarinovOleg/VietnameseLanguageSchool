import React, { MouseEventHandler } from "react";
import ButtonSound from "./ButtonSound";
function DisplayWordBlock(props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  word: string;
  picture?:string;
  example?:string
  }) {
  return (
    <>
    <div className="leading-[3rem]">{props.word}</div>
    <div className="inline-block pt-10"><img src={props.picture}/></div>
    <div className="text-blue-500 p-10">
      <span className="text-xl p-2">{props.example}</span>
    </div>
    <ButtonSound onClick={props.onClick} />
    </>
  );
}

export default DisplayWordBlock;