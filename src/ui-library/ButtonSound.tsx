import React from "react";

function ButtonSound(props: {
  onClick: any;
  hover?: string;
  position?: string;
}) {
  return (
    <button
      type="button"
      className={`${props.position} p-4 text-black rounded-xl border-solid  cursor-pointer bg-background-button bg-no-repeat  bg-bottom bg-contain ${props.hover}`}
      onClick={props.onClick}
      aria-label="button sound"
    ></button>
  );
}

export default ButtonSound;
