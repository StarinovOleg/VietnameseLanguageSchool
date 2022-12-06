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
      className={`p-4 lg:m-4 md:m-4 m-1 border-solid lg:w-56 md:w-56 w-48 cursor-pointer text-xl border-2 border-sky-500 md:hover:border-sky-800 lg:hover:border-sky-800 rounded-lg text-sky-500  lg:hover:text-sky-800 md:hover:text-sky-800 ${props.btndisabledclass}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default ButtonTraining;
