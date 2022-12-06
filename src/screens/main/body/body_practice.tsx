import React from "react";

function BodyPractice(props: {
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
    <div className="bg-indigo-50 md:min-h-screen sm:h-auto">
      <div className="text-center p-4 xl mx-4 ">
        <div className="bg-white border-solid rounded-xl md:min-h-screen">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default BodyPractice;
