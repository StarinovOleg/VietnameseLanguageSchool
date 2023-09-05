import React from "react";
import ButtonSound from "../../../../ui-library/buttons/ButtonSound";
import useSound from "use-sound";
const CardDemoAudio = (props: {
  item: string | string[];
  text?: string;
  color?: string;
  img?: string;
  shadowcolor?: string;
}) => {
  const [play] = useSound(props.item);
  return (
    <div
      className={`${props.shadowcolor} w-44 border-solid rounded-xl bg-[#E2FFEF]  m-4 text-center group `}
    >
      <div className="p-10">
        <p className={`text-6xl ${props.color} font-['DancingScript']`}>
          {props.text}
        </p>
      </div>
      <div className="bg-[#00AA88] border-solid rounded-b-lg p-10 relative">
        <ButtonSound
          onClick={play}
          hover="group-hover:p-6"
          position="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};
export default CardDemoAudio;
