import React, { useContext } from "react";
import ButtonSound from "../../../../../ui-library/buttons/ButtonSound";
import useSound from "use-sound";

export default function TonesItem(props: { displayText: any; v?: any }) {
  const { displayText } = props;
  const [play] = useSound(props.v, { volume: 0.1 });
  return (
    <div className="flex">
      <div className="mt-2 flex-1">{displayText}</div>
      <div className="my-auto flex-1">
        <ButtonSound onClick={play} />
      </div>
    </div>
  );
}
