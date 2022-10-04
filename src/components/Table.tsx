import React from "react";

import ButtonSound from "../screens/learning/components/ButtonSound";
import useSound from 'use-sound';

const Table = (props: { k?: any; v?:any }) => {
  const [play] = useSound(props.v);
  return (

<div className="flex">
  <div className="mt-2 flex-1">{props.k}</div>
  <div><ButtonSound onClick={play}/></div>
</div>

  );
};
export default Table;