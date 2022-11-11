import React, { useContext, useEffect } from "react";

import negative from '../../../assets/sounds/noncorrect.mp3'
import positive from '../../../assets/sounds/correct.mp3'
import { sound } from "../../../services/sound_function";
import { unit_1_ob } from "../../../dictionary/unit-1/unit_1_ob";
import { unit_1_1 } from "../../../dictionary/unit-1/unit_1_1";
import { unit_2 } from "../../../dictionary/unit-2/unit_2";
import { unit_2_2 } from "../../../dictionary/unit-2/unit_2_2";
import { unit_2_3 } from "../../../dictionary/unit-2/unit_2_3";
import { shuffle } from "./algoritm_fisher_shuffle";
import Button from "../../../ui-library/Button";
import H1 from "../../../ui-library/H1";
import H2 from "../../../ui-library/H2";
import { useNavigate, useLocation } from "react-router-dom";
import SchoolContext from "../../../store/state";
import { converstation } from "../../../store/static";
import { random } from "./random_words";
import CorrectAnswer from "../../../components/CorrectAnswer";
import NotCorrectAnswer from "../../../components/NotCorrectAnswer";
import Timer from "../../../components/Timer";
import DisplayWordBlock from "../../../components/DisplayWordBlock";
import Error from "../../main/error/Error";
import BodyPractice from "../../main/body/body_practice";
function LearningIndex() {
  const words = Object.keys(unit_1_ob); 
  const words1_1 = Object.keys(unit_1_1);
  const words2 = Object.keys(unit_2);
  const words2_2 = Object.keys(unit_2_2);
  const words2_3= Object.keys(unit_2_3);
  const arr = [];
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(SchoolContext);

  //checking answer
  const check = (number) => {
    if (number === arr[0]) {
      redirectEndScreen();
      context.incrementPositive();
      context.incrementTotal();
      sound(positive)
    } else {
      redirectEndScreen();
      context.incrementNegative();
      context.incrementTotal();
      sound(negative)
    }
  };
  //redirect on done screen
  const redirectEndScreen = () => {
    if (context.countTotal >= 9) {
      navigate("/endtest", {
        replace: true,
        state: { title: `${location.state.title}` },
      });

    }
  };
  //dynamic words display
  const displayWords = () => {
    switch (location.state?.title) {
      case converstation.lessons.lessons[0].title:
        random(words, arr);
        return (
        <DisplayWordBlock  word={unit_1_ob[arr[0]].word} 
        picture={unit_1_ob[arr[0]].picture} 
        example={unit_1_ob[arr[0]].example}
        onClick={()=>{sound(unit_1_ob[arr[0]].audio)}}
        />
        );
      case converstation.lessons.lessons[1].title:
        random(words1_1, arr);
        return (
        <DisplayWordBlock  word={unit_1_1[arr[0]].word} 
        picture={unit_1_1[arr[0]].picture} 
        example={unit_1_1[arr[0]].example}
        onClick={()=>{sound(unit_1_1[arr[0]].audio)}}
        />
          );
      case converstation.lessons.lessons[2].title:
        random(words2, arr);
        return (
        <DisplayWordBlock  word={unit_2[arr[0]].word} 
        picture={unit_2[arr[0]].picture} 
        example={unit_2[arr[0]].example}
        onClick={()=>{sound(unit_2[arr[0]].audio)}}
        />);
      case converstation.lessons.lessons[3].title:
        random(words2_2, arr);
        return (
        <DisplayWordBlock  word={unit_2_2[arr[0]].word} 
        picture={unit_2_2[arr[0]].picture} 
        example={unit_2_2[arr[0]].example}
        onClick={()=>{sound(unit_2_2[arr[0]].audio)}}
        />
       );
      case converstation.lessons.lessons[4].title:
        random(words2_3, arr);
        return (
        <DisplayWordBlock  word={unit_2_3[arr[0]].word} 
        picture={unit_2_3[arr[0]].picture} 
        example={unit_2_3[arr[0]].example}
        onClick={()=>{sound(unit_2_3[arr[0]].audio)}}
        />);
      default:
        return <div>Chose Test Page</div>;
    }
  };
  useEffect(() => {
    // displayWords();
    if (context.countTotal !==0) {
        window.location.reload();
    }
  }, []);

  return (
    <>
      {location.state?.title ? (
     <BodyPractice>
            <H1 children={location.state?.title} />
            <H2 children={location.state?.subtitle} />
            <div className="text-4xl my-4">{displayWords()}</div>
            <div className="flex justify-center my-4 flex-wrap">
              <CorrectAnswer children={context.countPositive} />
              <NotCorrectAnswer children={context.countNegative} />
              <Timer seconds={context.countTimer} />
            </div>

            <div className="myItems">
              {shuffle(
                arr
                  .filter((item, index) => index < 4)
                  .map((number, index) => (
                    <Button
                      key={index}
                      onClick={() => check(number)}
                      children={number}
                      btnprimary="btn-primary"
                    />
                  ))
              )}
            </div>

        </BodyPractice>
      ) : (
         <Error/>
      )}
    </>
  );
}

export default LearningIndex;
