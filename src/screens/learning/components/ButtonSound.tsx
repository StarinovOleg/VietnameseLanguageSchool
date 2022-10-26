import React from "react";

function ButtonSound(props: {
  onClick: any;
  }) {
  return (
    <button
      type="button"
      className="p-4 text-black rounded-xl border-solid  cursor-pointer bg-background-button bg-no-repeat  bg-bottom bg-contain"
      onClick={props.onClick}
    >
    </button>
  );
}

export default ButtonSound;