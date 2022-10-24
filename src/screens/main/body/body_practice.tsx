import React from "react";

function BodyPractice({ children }: any) {
  return (
    <div className="bg-indigo-50 md:min-h-screen sm:h-auto">
        <div className="text-center p-4 xl mx-4 ">
          <div className="bg-white border-solid rounded-xl md:min-h-screen">
            {children}
          </div>
        </div>
    </div>
  );
}

export default BodyPractice;
