import React from "react";
import Main from "../main";

export default function Time() {
  return (
    <Main>
      <div className="flex flex-1 ">
        <p className="font-bold mx-[1%]">giờ</p> time(hour of the day)
      </div>
      <div className="flex flex-1 ">
        <p className="font-bold mx-[1%]">tiếng</p> hour
      </div>
      <div className="flex flex-1 ">
        <p className="font-bold mx-[1%]">phút</p> minute
      </div>
      <div className="flex flex-1 ">
        <p className="font-bold mx-[1%]">giây</p> second
      </div>
      <div className="flex flex-1 ">
        <p className="font-bold mx-[1%]">ruồi</p> half
      </div>
      <div>
        <p className="font-bold">A.M.</p>
      </div>
      <div>
        <div className="flex flex-1 ">
          <p className="font-bold mx-[1%]">12:00</p> mười hai giờ khuya
        </div>
        <div className="flex flex-1 ">
          <p className="font-bold mx-[1%]">4:00</p> bốn giờ sáng
        </div>
        <div className="flex flex-1 ">
          <p className="font-bold mx-[1%]">8:00</p> tám giờ sáng
        </div>
      </div>
      <div>
        <p className="font-bold ">P.M.</p>
      </div>
      <div>
        <div className="flex flex-1 ">
          <p className="font-bold mx-[1%]">12:00</p> mười hai giờ trưa
        </div>
        <div className="flex flex-1 ">
          <p className="font-bold mx-[1%]">4:00</p> bốn giờ chiều
        </div>
        <div className="flex flex-1 ">
          <p className="font-bold mx-[1%]">8:00</p> tám giờ chiều
        </div>
      </div>
    </Main>
  );
}
