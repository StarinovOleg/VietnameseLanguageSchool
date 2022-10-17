import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../../components/Card";
import CardListen from "../../components/CardListen";
import { converstation } from "../../store/static";
import { cardItemLesson } from "../learning/components/Lists";
import { cardItemConversation } from "../conversation/components/Lists";
import {cardItemPracticeTranslated} from "../practice_translated/components/List"
import H1 from "../../ui-library/H1";
import Error from '../main/error/Error'
import BodyPractice from "../main/body/body_practice";
interface location{
    title:any
  }

function Training() { 
    const location = useLocation();
    const state = location.state as location
    const displayWords = () => {
        switch (state.title) {
          case converstation.lessons.title:
            return (
               <>{cardItemLesson}</> 
            );
          case converstation.conversation.title:
              return (
                <>{cardItemConversation}</>
             );
             case converstation.practice_translate.title:
              return (
                <>{cardItemPracticeTranslated}</>
             );
      }
        }
    return (
        <BodyPractice>
          <H1 children={state?.title} />
            {state?.title ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  m-10">
                {displayWords()}
              </div>):<Error/>
            }
        </BodyPractice>
    );
}

export default Training;
