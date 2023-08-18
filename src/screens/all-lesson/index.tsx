import React from "react";
import { useLocation } from "react-router-dom";
import { converstation } from "../../store/static";
//import { cardItemLesson } from "../landing/section/words/components/Lists";
import { store_grammar } from "../../modules/module-grammar/store/store-grammar";
import ListSound from "../landing/section/audio/components/Lists";
import ListTranslate from "../landing/section/translate/components/List";
import H1 from "../../ui-library/H1";
import Error from "../main/error/Error";
import BodyPractice from "../main/body/body_practice";
import Lists from "../landing/section/words/components/Lists";
import DictionaryIndex from "../dictionary";
import ListsGrammar from "../../modules/module-grammar/components-grammar/item-component/Lists";
interface location {
  title: string;
}

function ListLessons() {
  const location = useLocation();
  const state = location.state as location;
  const displayWords = () => {
    switch (state.title) {
      case converstation.words.title:
        return <Lists />;
      case converstation.audio.title:
        return <ListSound />;
      case converstation.translate.title:
        return <ListTranslate />;
      case converstation.dictionary.title:
        return <DictionaryIndex />;
      case store_grammar.main.grammar.block.textTitle:
        return <ListsGrammar />;
    }
  };
  return (
    <BodyPractice>
      <H1 children={state?.title} />
      {state?.title !== converstation.dictionary.title ? (
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  m-10">
          {displayWords()}
        </div>
      ) : state.title === converstation.dictionary.title ? (
        <div>{displayWords()}</div>
      ) : (
        <Error />
      )}
    </BodyPractice>
  );
}

export default ListLessons;
