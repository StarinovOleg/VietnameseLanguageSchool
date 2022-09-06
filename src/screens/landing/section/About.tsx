import React from "react";
import icon_market from "../../../assets/icon-market.png";
import icon_game from "../../../assets/icon-game.png";
const static_data = [
  {
    id: 1,
    title: "Free access",
    body: " Our mission is to make language learning accessible to everyone",
    img: icon_market,
  },
  {
    id: 2,
    title: "Learning in the game",
    body: " Game mechanics proven effective for all ages",
    img: icon_game,
  },
];
const static_data_list = static_data.map(
  (item: { title: string; body: string; id: number; img: any }) => (
    <div className=" drop-shadow-2xl flex p-10" key={item.id}>
      <img src={item.img} alt="logo" className="w-12 h-12 mt-10" />
      <div className="px-2 py-10">
        <p className=" font-['Mochiy'] text-xl text-yellow-500 ">
          {item.title}
        </p>
        <p className="text-[#260105]">{item.body}</p>
      </div>
    </div>
  )
);
function About() {
  return (
    <div className=" md:bg-background-about sm:bg-none bg-no-repeat bg-contain bg-left-top md:h-screen sm:h-auto">
      <div className="flex  md:justify-end sm:justify-start">
        <div>{static_data_list}</div>
      </div>
    </div>
  );
}

export default About;
