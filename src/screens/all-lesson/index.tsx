import React from "react";
import { useLocation, useParams } from "react-router-dom";
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
  let { identificator } = useParams();
  const state = location.state as location;
  const displayWords = () => {
    switch (identificator) {
      case "words":
        return (
          <Block>
            <Lists />
          </Block>
        );
      case "audio":
        return (
          <Block>
            <ListSound />
          </Block>
        );
      case "translate":
        return (
          <Block>
            <ListTranslate />
          </Block>
        );
      case "dictionary":
        return <DictionaryIndex />;
      case "grammar":
        return (
          <Block>
            <ListsGrammar />
          </Block>
        );
      default:
        return <Error />;
    }
  };
  const Block = (props: {
    children:
      | string
      | number
      | boolean
      | React.ReactFragment
      | React.ReactPortal
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | null
      | undefined;
  }) => {
    return (
      <>
        <H1
          children={
            state?.title
              ? state.title
              : `Chose group ${identificator} for training`
          }
        />
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6  m-10">
          {props.children}
        </div>
      </>
    );
  };
  return (
    <>
      {!identificator ? (
        <Error />
      ) : (
        <BodyPractice>
          {identificator !== "dictionary" ? (
            <>{displayWords()}</>
          ) : identificator === "dictionary" ? (
            <>
              <H1 children={identificator} />
              <div>{displayWords()}</div>
            </>
          ) : (
            <Error />
          )}
        </BodyPractice>
      )}
    </>
  );
}

export default ListLessons;
