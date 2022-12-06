import React from "react";

function Button(props: {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: string;
}) {
  return (
    <button
      type="button"
      className={`p-4 lg:m-4 md:m-4 m-1 rounded-xl	hover:bg-stone-500 btn-primary text-white border-solid lg:w-56 md:w-56 w-48 cursor-pointer`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
