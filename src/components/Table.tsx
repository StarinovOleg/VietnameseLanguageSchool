import React from "react";

import ButtonSound from "../screens/learning/components/ButtonSound";
import ReactAudioPlayer from 'react-audio-player';

const Table = (props: { k?: any; v?:any }) => {
  return (

<div>{props.k}
 <ReactAudioPlayer 
    className="inline-block bg-inherit "
    src={props.v}
    controls
  /></div>

  );
};
export default Table;