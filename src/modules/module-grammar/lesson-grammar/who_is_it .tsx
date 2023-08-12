import React from "react";
import Main from "../main";

export default function WhoIsIt() {
  return (
    <Main>
      <div className="flex flex-1 gap-2">
        <div>
          <div>
            <p className="font-bold">Animate nouns </p>
          </div>
          <div>cái</div>
          <div>
            <p className="font-bold">cái đồng hồ</p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold">Inanimate nouns</p>
          </div>
          <div>con</div>
          <div>
            <p className="font-bold">con mèo</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-1 gap-6">
          <div>
            <div>
              <p className="font-bold">People</p>
            </div>
            <div>Đây là ai?</div>
            <div>
              <p className="font-bold">who</p>
            </div>
          </div>
          <div>
            <div>
              <p className="font-bold">Animals</p>
            </div>
            <div>Kia là con gà?</div>
            <div>
              <p className="font-bold">who</p>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
