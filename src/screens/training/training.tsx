import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../../components/Card";
import CardListen from "../../components/CardListen";
import { converstation } from "../../store/static";
import { cardItemLesson } from "../learning/components/Lists";
import { cardItemConversation } from "../conversation/components/Lists";
import H1 from "../../ui-library/H1";
import Error from '../main/error/Error'
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
      }
        }
    return (
        <div className="bg-indigo-50 md:h-screen sm:h-auto">
            <div className="text-center p-4 xl mx-4 ">
            <div className="bg-white border-solid rounded-xl">
                <H1 children={state?.title} />
                {state?.title ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  m-10">
                   {displayWords()}
                </div>):<Error/>
                }
            </div>
            </div>
        </div>
    );
}

export default Training;
