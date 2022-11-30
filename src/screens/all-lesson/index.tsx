import React from "react";
import { useLocation } from "react-router-dom";
import { converstation } from "../../store/static";
import { cardItemLesson } from "../landing/section/words/components/Lists";
import { cardItemConversation } from "../landing/section/audio/components/Lists";
import { cardItemPracticeTranslated } from "../landing/section/translate/components/List";
import H1 from "../../ui-library/H1";
import Error from "../main/error/Error";
import BodyPractice from "../main/body/body_practice";
interface location {
  title: any;
}

function ListLessons() {
  const location = useLocation();
  const state = location.state as location;
  const displayWords = () => {
    switch (state.title) {
      case converstation.lessons.title:
        return <>{cardItemLesson}</>;
      case converstation.conversation.title:
        return <>{cardItemConversation}</>;
      case converstation.practice_translate.title:
        return <>{cardItemPracticeTranslated}</>;
    }
  };
  return (
    <BodyPractice>
      <H1 children={state?.title} />
      {state?.title ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  m-10">
          {displayWords()}
        </div>
      ) : (
        <Error />
      )}
    </BodyPractice>
  );
}

export default ListLessons;
