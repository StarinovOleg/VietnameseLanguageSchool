import React from "react";

function Button(props: {
  btnsecondary?: string;
  btnprimary?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <button
      type="button"
      className={`lg:p-4 md:m-4 m-1 text-white rounded-xl	 border-solid w-56   cursor-pointer ${props.btnsecondary} ${props.btnprimary}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
