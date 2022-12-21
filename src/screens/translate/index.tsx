import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { converstation } from "../../store/static";
import Error from "../main/error/Error";
import H1 from "../../ui-library/H1";
import BodyPractice from "../main/body/body_practice";
import H2 from "../../ui-library/H2";
import Input from "./components/Input";
import ButtonTraining from "../../ui-library/buttons/ButtonTraining";
import { useDisplayWords, useDisplayWords1 } from "../../hooks/useDisplayWords";

interface location {
  title: string;
  [key: string]: string | number;
}
function TranslateIndex() {
  const location = useLocation();
  const state = location.state as location;
  const arr = useDisplayWords(state);
  const arr_vietnamese = useDisplayWords1(state);
  const [values, setValues] = useState(arr);
  const [valuesVietnamese, setValuesVietnamese] = useState(arr_vietnamese);
  const [displayanswer, setDisplayAnswer] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const changeHandler = (e: any, index: any) => {
    const newDoc = [...(values || [])];
    newDoc[index][e.target.name] = e.target.value;
    setValues(newDoc);
  };
  const changeHandlerVietnamese = (e: any, index: any) => {
    const newDoc = [...(valuesVietnamese || [])];
    newDoc[index][e.target.name] = e.target.value;
    setValuesVietnamese(newDoc);
  };

  const check = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setDisplayAnswer(true);
    setDisabledInput(!disabledInput);
    setLoading(true);
  };

  return (
    <>
      {values?.length !== 0 ||
      (valuesVietnamese?.length !== 0 && state?.title) ? (
        <BodyPractice>
          <H1 children={state?.title} />
          <ButtonTraining
            onClick={check}
            children="CHECK WORDS"
            disabled={loading}
          />
          <div className="text-4xl my-4 p-10 text-left">
            <>
              {values?.length !== 0 ? (
                <>
                  <H2
                    children={converstation.translate.subtitle_vietnamese}
                    fontsizeprimary="lg:text-2xl md:text-2xl text-xl mt-10 mb-10"
                  />
                  {values?.map((display, index) => (
                    <Fragment key={display.id}>
                      <Input
                        onChange={(e) => changeHandler(e, index)}
                        value={display.user_message}
                        sentence={display.english}
                        name="user_message"
                        disabled={disabledInput}
                      />
                      <>
                        {displayanswer ? (
                          <div>
                            {display.user_message === display.vietnamese ? (
                              <img
                                src={converstation.translate.icon_correct}
                                className=" w-4 h-4 "
                                alt="icon correct"
                              />
                            ) : (
                              <div className="flex justify-start flex-wrap">
                                <img
                                  src={converstation.translate.icon_notcorrect}
                                  className=" w-4 h-4 "
                                  alt="icon not correct"
                                />
                                <p className="text-xs text-rose-800">
                                  {display.vietnamese}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : null}
                      </>
                    </Fragment>
                  ))}
                </>
              ) : null}
            </>
            <>
              {valuesVietnamese?.length !== 0 ? (
                <>
                  <H2
                    children={converstation.translate.subtitle_english}
                    fontsizeprimary="lg:text-2xl md:text-2xl text-xl mt-10 mb-10"
                  />
                  {valuesVietnamese?.map((display, index) => (
                    <Fragment key={display.id}>
                      <Input
                        onChange={(e) => changeHandlerVietnamese(e, index)}
                        value={display.user_message}
                        sentence={display.vietnamese}
                        name="user_message"
                        disabled={disabledInput}
                      />
                      <>
                        {displayanswer ? (
                          <div>
                            {display.user_message === display.english ? (
                              <img
                                src={converstation.translate.icon_correct}
                                className="md:w-4 w-4 h-4  "
                                alt="icon correct"
                              />
                            ) : (
                              <div className="flex justify-start flex-wrap">
                                <img
                                  src={converstation.translate.icon_notcorrect}
                                  className=" w-4 h-4 "
                                  alt="icon not correct"
                                />
                                <p className="text-xs text-rose-800">
                                  {display.english}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : null}
                      </>
                    </Fragment>
                  ))}
                </>
              ) : null}
            </>
          </div>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default TranslateIndex;
