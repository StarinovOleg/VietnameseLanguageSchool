import React from "react";

function Button(props: {
  btnsecondary?: string;
  btnprimary?: string;
  disabled?:any;
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
      className={`p-4 lg:m-4 md:m-4 m-1  text-white rounded-xl	 border-solid lg:w-56 md:w-56 w-48 cursor-pointer ${props.btnsecondary} ${props.btnprimary}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
