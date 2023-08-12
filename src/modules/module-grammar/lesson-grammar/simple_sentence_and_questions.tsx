import React from "react";
import Main from "../main";

export default function SimpleSentenceAndQuestions() {
  return (
    <Main>
      <div>Simple sentences: subject + ver + object </div>
      <div>
        <p className="font-bold">Tôi + là + kỹ sư</p>
      </div>
      <div>
        <p className="font-bold">I am an engineer</p>
      </div>
      <div className="flex">
        <p className="font-bold">không</p> - no, not
      </div>
      <div className="flex">
        <p className="font-bold">không</p> - use in combination with
        <p className="font-bold"> phải</p>
      </div>
      <div>
        <p className="font-bold">Tôi không phải là kỹ sư</p>
      </div>
      <div>
        <p>
          In the question tag phrase
          <span className="font-bold"> phải không</span> at the end
        </p>
      </div>
      <div>
        <p className="font-bold">Tôi là kỹ sư phải không?</p>
      </div>
    </Main>
  );
}
