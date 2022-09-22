import React, { useContext, useEffect } from "react";

import { sound } from "../../services/sound_function";
import { converstation_1 } from "../../dictionary/unit-1/converstation_1";
import { converstation_2 } from "../../dictionary/unit-2/converstation_2";
import { useNavigate, useLocation } from "react-router-dom";
import  {converstation}  from "../../store/static";
import Error from "../main/error/Error";
import DisplayWordBlock from "../learning/components/DisplayWordBlock";

interface location{
  title:any
}
function ConversationIndex() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as location
  //dynamic words display
  const displayWords = () => {
    switch (state?.title) {
      case converstation.hello.title:
        return (
        <DisplayWordBlock  word={converstation_1.converstation_1_1.text} 
           audio={converstation_1.converstation_1_1.audio}
        />
        );
      case converstation.where_you_from.title:
          return (
          <DisplayWordBlock  word={converstation_1.converstation_1_2.text} 
             audio={converstation_1.converstation_1_2.audio}
          />
         );
         case converstation.what_is.title:
          return (
          <DisplayWordBlock  word={converstation_2.converstation_2_1.text} 
             audio={converstation_2.converstation_2_1.audio}
          />
         );
         case converstation.introduce_yourself.title:
          return (
          <DisplayWordBlock  word={converstation_2.converstation_2_2.text} 
             audio={converstation_2.converstation_2_2.audio}
          />
         );
         case converstation.start_conversation.title:
          return (
          <DisplayWordBlock  word={converstation_2.converstation_2_3.text} 
             audio={converstation_2.converstation_2_3.audio}
          />
         );
      }
    }
      return (
    <div className="bg-indigo-50 md:h-screen sm:h-auto">
        <div className="text-center p-4 xl mx-4 ">
          <div className="bg-white border-solid rounded-xl ">
          {state?.title ?  (<div className="text-4xl my-4 p-10"style={{whiteSpace: "pre-wrap"}}>{displayWords()}</div>):<Error/>
         }
          </div>
        </div>
    </div>
  );
}

export default ConversationIndex;
