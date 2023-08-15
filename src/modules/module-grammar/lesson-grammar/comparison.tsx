import React from "react";
import Main from "../main";

export default function Comparison() {
  return (
    <Main>
      <div>
        <div>
          <p className="font-bold">Special comparison words:</p>
        </div>
        <div>
          <p className="font-bold">như</p>
        </div>
        <div>
          <p className="font-bold">bằng</p>
        </div>
        <div>
          <p className="font-bold">không như</p>
        </div>
        <div>
          <p className="font-bold">không bằng</p>
        </div>
      </div>
      <div>
        <div className="flex flex-1 mx-[1%]">
          <p className="font-bold">Trắng như tuyết</p> - White as snow
        </div>
        <div className="flex flex-1 mx-[1%]">
          <p className="font-bold">Bạn cao bằng anh ấy</p> - You are as tall as
          him
        </div>
        <div className="flex flex-1 mx-[1%]">
          <p className="font-bold">Cái cáo này không đẹp như cái áo kia</p>-
          This fox is not as pretty as that one
        </div>
        <div className="flex flex-1 mx-[1%]">
          <p className="font-bold">Xe máy điện Không nhanh bằng xe máy</p>-
          Electric motorbikes Not as fast as motorbikes
        </div>
      </div>
      <div>
        <div>
          <p>
            Comparative: <span className="font-bold">hơn</span> more than
          </p>
        </div>
        <div>
          <p>
            Position <span className="font-bold">hơn</span> after the adjective.
          </p>
        </div>
        <div>
          <p className="font-bold">Tôi cao hơn bạn</p>
        </div>
        <div>I'm taller than you</div>
      </div>
    </Main>
  );
}
