import React from "react";
import Main from "../main";

const phonetics = [
  { id: 0, tone: "la", about: "Hight Level" },
  { id: 1, tone: "là", about: "Low Level" },
  { id: 2, tone: "lã", about: "Hight Falling-Rising" },
  { id: 3, tone: "lả", about: "Low Falling-Rising" },
  { id: 4, tone: "lá", about: "Hight Rising" },
  { id: 5, tone: "lạ", about: "Low Rising" },
];
const phoneticsList = phonetics.map((item) => {
  return (
    <div className="flex gap-6" key={item.id}>
      <p className="font-bold">{item.tone}</p>
      <p>{item.about}</p>
    </div>
  );
});
export default function Phonetics() {
  return (
    <Main>
      <div>
        <div>6 tones:</div>
      </div>
      <div>{phoneticsList}</div>
    </Main>
  );
}
