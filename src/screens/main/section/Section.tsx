import React from "react";

function Section({ children }: any) {
  return (
    <div className="mx-10 my-20 md:my-20 lg:my-40">
      {children}
    </div>
  );
}

export default Section;
