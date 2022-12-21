import React from "react";

function ButtonTraining(props: {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: string;
  btndisabledclass?: string;
}) {
  return (
    <button
      type="button"
      className={`${
        props.children.length >= 17
          ? "text-[1rem] leading-[2rem]"
          : "text-[1.25rem] leading-[2rem]"
      } ${
        props.disabled
          ? "p-4 lg:m-4 md:m-4 m-1  lg:w-56 md:w-56 w-48 border-2 border-stone-500 opacity-50 cursor-not-allowed rounded-lg text-stone-500"
          : "p-4 lg:m-4 md:m-4 m-1  lg:w-56 md:w-56 w-48 cursor-pointer  border-2 border-sky-500 md:hover:border-sky-800 lg:hover:border-sky-800 rounded-lg text-sky-500  lg:hover:text-sky-800 md:hover:text-sky-800"
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default ButtonTraining;
