import React, { useState } from "react";
import {
  translated,
  trans_1,
  trans_2,
} from "../../dictionary/unit-1/translated";
import { useLocation } from "react-router-dom";
import { converstation } from "../../store/static";
import Error from "../main/error/Error";
import H1 from "../../ui-library/H1";
import BodyPractice from "../main/body/body_practice";
import H2 from "../../ui-library/H2";
import Input from "./components/Input";
import Button from "../../ui-library/Button";

interface location {
  title: string;
  [key: string]: string | number;
}
function TranslateIndex() {
  const location = useLocation();
  const state = location.state as location;
  //submit button-------------
  const [loading, setLoading] = useState(false);
  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);
    //block-1
    if (trans_1[0].vietnamese === message) {
      setActiveCorrect(!active_correct);
    } else if (trans_1[0].vietnamese !== message || message.length <= 0) {
      console.log("wrong1");
      setActiveNotCorrect(!active_notcorrect);
      setActiveNotCorrect1(!active_notcorrect1);
    }
    //block-2
    if (trans_1[1].vietnamese === inputMessage1) {
      console.log("good1");
      setActiveCorrect1(!active_correct1);
    } else if (
      trans_1[1].vietnamese !== inputMessage1 ||
      inputMessage1.length <= 0
    ) {
      console.log("wrong1");
      setActiveNotCorrect1(!active_notcorrect1);
    }
    //block-3
    if (trans_1[2].vietnamese === inputMessage2) {
      console.log("good1");
      setActiveCorrect2(!active_correct2);
    } else if (
      trans_1[2].vietnamese !== inputMessage2 ||
      inputMessage2.length <= 0
    ) {
      console.log("wrong1");
      setActiveNotCorrect2(!active_notcorrect2);
    }
    //block-4
    if (trans_1[3].vietnamese === inputMessage3) {
      console.log("good1");
      setActiveCorrect3(!active_correct3);
    } else if (
      trans_1[3].vietnamese !== inputMessage3 ||
      inputMessage3.length <= 0
    ) {
      console.log("wrong1");
      setActiveNotCorrect3(!active_notcorrect3);
    }
    //block-5
    if (trans_1[4].vietnamese === inputMessage4) {
      console.log("good1");
      setActiveCorrect4(!active_correct4);
    } else if (
      trans_1[4].vietnamese !== inputMessage4 ||
      inputMessage4.length <= 0
    ) {
      console.log("wrong1");
      setActiveNotCorrect4(!active_notcorrect4);
    }
    //block-6
    if (trans_1[5].vietnamese === inputMessage5) {
      console.log("good1");
      setActiveCorrect5(!active_correct5);
    } else if (
      trans_1[5].vietnamese !== inputMessage5 ||
      inputMessage5.length <= 0
    ) {
      console.log("wrong1");
      setActiveNotCorrect5(!active_notcorrect5);
    }
    //block7 vietnamese
    if (trans_2[0].english === inputMessage6) {
      console.log("her");
      setActiveCorrect6(!active_correct6);
    } else if (
      trans_2[0].english !== inputMessage6 ||
      inputMessage6.length <= 0
    ) {
      console.log(inputMessage6);
      setActiveNotCorrect6(!active_notcorrect6);
    }
    //block8 vietnamese
    if (trans_2[1].english === inputMessage7) {
      console.log("good1");
      setActiveCorrect7(!active_correct7);
    } else if (
      trans_2[1].english !== inputMessage7 ||
      inputMessage7.length <= 0
    ) {
      console.log("wrong1");
      setActiveNotCorrect7(!active_notcorrect7);
    }
    //block9 vietnamese
    if (trans_2[2].english === inputMessage8) {
      console.log("good1");
      setActiveCorrect8(!active_correct8);
    } else if (
      trans_2[2].english !== inputMessage8 ||
      inputMessage8.length <= 0
    ) {
      console.log("wrong1");
      setActiveNotCorrect8(!active_notcorrect8);
    }
    //block10 vietnamese
    if (trans_2[3].english === inputMessage9) {
      console.log("good1");
      setActiveCorrect9(!active_correct9);
    } else if (
      trans_2[3].english !== inputMessage9 ||
      inputMessage9.length <= 0
    ) {
      console.log(trans_2[3].english);
      setActiveNotCorrect9(!active_notcorrect9);
    }
  };

  //-------block1-------------------
  const [active_correct, setActiveCorrect] = useState(false);
  const [active_notcorrect, setActiveNotCorrect] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };
  //---------END BLOCK 1----------

  //-------block2-------------------
  const [active_correct1, setActiveCorrect1] = useState(false);
  const [active_notcorrect1, setActiveNotCorrect1] = useState(false);
  const [inputMessage1, setInputMessage1] = useState("");
  const handleChange1 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage1(event.target.value);
  };
  //---------END BLOCK 2----------

  //-------block3-------------------
  const [active_correct2, setActiveCorrect2] = useState(false);
  const [active_notcorrect2, setActiveNotCorrect2] = useState(false);
  const [inputMessage2, setInputMessage2] = useState("");
  const handleChange2 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage2(event.target.value);
  };
  //---------END BLOCK 3----------
  //-------block4-------------------
  const [active_correct3, setActiveCorrect3] = useState(false);
  const [active_notcorrect3, setActiveNotCorrect3] = useState(false);
  const [inputMessage3, setInputMessage3] = useState("");
  const handleChange3 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage3(event.target.value);
  };
  //---------END BLOCK 4----------
  //-------block5-------------------
  const [active_correct4, setActiveCorrect4] = useState(false);
  const [active_notcorrect4, setActiveNotCorrect4] = useState(false);
  const [inputMessage4, setInputMessage4] = useState("");
  const handleChange4 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage4(event.target.value);
  };
  //---------END BLOCK 5----------
  //-------block6-------------------
  const [active_correct5, setActiveCorrect5] = useState(false);
  const [active_notcorrect5, setActiveNotCorrect5] = useState(false);
  const [inputMessage5, setInputMessage5] = useState("");
  const handleChange5 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage5(event.target.value);
  };
  //---------END BLOCK 6----------

  //-------------------------------VIETNAMESE------------------------------------------------
  //-------block7-------------------
  const [active_correct6, setActiveCorrect6] = useState(false);
  const [active_notcorrect6, setActiveNotCorrect6] = useState(false);
  const [inputMessage6, setInputMessage6] = useState("");
  const handleChange6 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage6(event.target.value);
  };
  //---------END BLOCK 7----------
  //-------block8-------------------
  const [active_correct7, setActiveCorrect7] = useState(false);
  const [active_notcorrect7, setActiveNotCorrect7] = useState(false);
  const [inputMessage7, setInputMessage7] = useState("");
  const handleChange7 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage7(event.target.value);
  };
  //---------END BLOCK 8----------
  //-------block9-------------------
  const [active_correct8, setActiveCorrect8] = useState(false);
  const [active_notcorrect8, setActiveNotCorrect8] = useState(false);
  const [inputMessage8, setInputMessage8] = useState("");
  const handleChange8 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage8(event.target.value);
  };
  //---------END BLOCK 9----------
  //-------block10-------------------
  const [active_correct9, setActiveCorrect9] = useState(false);
  const [active_notcorrect9, setActiveNotCorrect9] = useState(false);
  const [inputMessage9, setInputMessage9] = useState("");
  const handleChange9 = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage9(event.target.value);
  };
  //---------END BLOCK 10----------

  const displayWords = () => {
    switch (state?.title) {
      case converstation.practice_translate.item[0].title:
        return (
          <>
            <H1 children={state?.title} />
            <Button
              onClick={handleClick}
              children="CHECK WORDS"
              btnprimary={`${
                loading
                  ? "cursor-no-drop border-stone-500 text-stone-500"
                  : "cursor-pointer md:hover:border-sky-800 lg:hover:border-sky-800 lg:hover:text-sky-800 md:hover:text-sky-800"
              } border-2 border-sky-500  rounded-lg  lg:text-5xl md:text-5xl text-xl text-sky-500 `}
              disabled={loading}
            />
            <div className="text-left  ">
              <H2
                children={translated.translated_1_1.title}
                fontsizeprimary="lg:text-5xl md:5xl text-xl mt-10 mb-10"
              />
              <div className="mt-4">
                <Input
                  onChange={handleChange}
                  value={message}
                  sentence={trans_1[0].english}
                  active_correct={active_correct}
                  active_notcorrect={active_notcorrect}
                />
                <Input
                  onChange={handleChange1}
                  value={inputMessage1}
                  sentence={trans_1[1].english}
                  active_correct={active_correct1}
                  active_notcorrect={active_notcorrect1}
                />
                <Input
                  onChange={handleChange2}
                  value={inputMessage2}
                  sentence={trans_1[2].english}
                  active_correct={active_correct2}
                  active_notcorrect={active_notcorrect2}
                />
                <Input
                  onChange={handleChange3}
                  value={inputMessage3}
                  sentence={trans_1[3].english}
                  active_correct={active_correct3}
                  active_notcorrect={active_notcorrect3}
                />
                <Input
                  onChange={handleChange4}
                  value={inputMessage4}
                  sentence={trans_1[4].english}
                  active_correct={active_correct4}
                  active_notcorrect={active_notcorrect4}
                />
                <Input
                  onChange={handleChange5}
                  value={inputMessage5}
                  sentence={trans_1[5].english}
                  active_correct={active_correct5}
                  active_notcorrect={active_notcorrect5}
                />
              </div>
            </div>
            <div className="text-left">
              <H2
                children={translated.translated_1_2.title}
                fontsizeprimary="lg:text-5xl md:5xl text-xl mt-10 mb-10"
              />
              <div className="mt-4">
                <Input
                  onChange={handleChange6}
                  value={inputMessage6}
                  sentence={trans_2[0].vietnamese}
                  active_correct={active_correct6}
                  active_notcorrect={active_notcorrect6}
                />
                <Input
                  onChange={handleChange7}
                  value={inputMessage7}
                  sentence={trans_2[1].vietnamese}
                  active_correct={active_correct7}
                  active_notcorrect={active_notcorrect7}
                />
                <Input
                  onChange={handleChange8}
                  value={inputMessage8}
                  sentence={trans_2[2].vietnamese}
                  active_correct={active_correct8}
                  active_notcorrect={active_notcorrect8}
                />
                <Input
                  onChange={handleChange9}
                  value={inputMessage9}
                  sentence={trans_2[3].vietnamese}
                  active_correct={active_correct9}
                  active_notcorrect={active_notcorrect9}
                />
              </div>
            </div>
          </>
        );
      case converstation.practice_translate.item[1].title:
        return <H1 children={state?.title} />;
      case converstation.practice_translate.item[2].title:
        return <H1 children={state?.title} />;
      case converstation.practice_translate.item[3].title:
        return <H1 children={state?.title} />;
      case converstation.practice_translate.item[4].title:
        return <H1 children={state?.title} />;
    }
  };

  return (
    <>
      {state?.title ? (
        <BodyPractice>
          <div className="text-4xl my-4 p-10">{displayWords()}</div>
        </BodyPractice>
      ) : (
        <Error />
      )}
    </>
  );
}

export default TranslateIndex;
