import React from "react";

function ButtonSound(props: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  }) {
  return (
    <button
      type="button"
      className="p-4 m-4  text-black rounded-xl border-solid w-56 cursor-pointer bg-background-button bg-no-repeat  bg-bottom bg-contain"
      onClick={props.onClick}
    >
    </button>
  );
}

export default ButtonSound;