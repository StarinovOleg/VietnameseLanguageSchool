import React, { useContext, useEffect, useState } from "react";

import { translated } from "../../dictionary/unit-1/translated";
import { converstation_2 } from "../../dictionary/unit-2/converstation_2";
import { useLocation } from "react-router-dom";
import  {converstation}  from "../../store/static";
import Error from "../main/error/Error";
import DisplayWordBlock from "../learning/components/DisplayWordBlock";
import Table from "../../components/Table"
import { pronunciation } from "../../dictionary/unit-1/pronunciation";
import H1 from "../../ui-library/H1";
import BodyPractice from "../main/body/body_practice";
import H2 from "../../ui-library/H2";

interface location{
  title:any,
  [key: string]: string | number;
}

function PracticeTranslatedIndex() {
  const location = useLocation();
  const [active_correct, setActiveCorrect] = useState(false);
  const [active_notcorrect, setActiveNotCorrect] = useState(false);
  const state = location.state as location

   
  const handleOnChange = () => {
    setActiveCorrect(!active_correct);
  };
  const handleChangeActiveNotCorrect = () => {
    setActiveNotCorrect(!active_notcorrect);
  };
  const check = (evt:any) => {
    return evt.target.value
  };
  const checkInput=(evt: { target: { value: any; }; })=>{
    if(translated.translated_1_1_vietnamese.s1_vietnamese==evt.target.value){
       console.log('good1')
    }else{  
       
    };
   
    if(translated.translated_1_1_vietnamese.s2_vietnamese==evt.target.value){
        console.log('good2')
     }
    if(translated.translated_1_1_vietnamese.s3_vietnamese==evt.target.value){
        console.log('good3')
     }
    if(translated.translated_1_1_vietnamese.s4_vietnamese==evt.target.value){
        console.log('good4')
     }
    if(translated.translated_1_1_vietnamese.s5_vietnamese==evt.target.value){
        console.log('good5')
     }
    if(translated.translated_1_1_vietnamese.s6_vietnamese==evt.target.value){
        console.log('good6')
     } 
    if(translated.translated_1_2_english.s1_english==evt.target.value){
        console.log('good1')
     }
    if(translated.translated_1_2_english.s2_english==evt.target.value){
         console.log('good2')
      }
    if(translated.translated_1_2_english.s3_english==evt.target.value){
         console.log('good3')
      }
    if(translated.translated_1_2_english.s4_english==evt.target.value){
         console.log('good4')
      }
  }
  const displayWords = () => {
    switch (state?.title) {
        case converstation.practice_translate.item[0].title:
            return (
                <>
                <H1 children={state?.title} />
                   
                <div className="m-10 text-left">    
                    <H2 children={translated.translated_1_1.title}/>
                    <>
                    {Object.keys(translated.translated_1_1_english ).map((keyName, i) => (
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6  mt-10" key={i}>
                            <label  htmlFor="first_name" className="block mb-2">{translated.translated_1_1_english[keyName]}</label>
                            <input onChange={checkInput} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Here your answer" required/>
                            <div className="">
                                {active_correct ?(
                                    <img src={converstation.practice_translate.icon_correct}  className="inactive mt-10  md:w-8 sm:w-auto ml-auto mr-auto "/>
                                ):null}
                                {active_notcorrect?(
                                <img src={converstation.practice_translate.icon_notcorrect}  className="inactive mt-10  md:w-8 sm:w-auto ml-auto mr-auto "/>
                                ):null}
                            </div>
                        </div>
                    ))}
                    </>
                </div>
                <div className="m-10 text-left">    
                    <H2 children={translated.translated_1_2.title}/>
                    <>
                    {Object.keys(translated.translated_1_2_vietnamese ).map((keyName, i) => (
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6  mt-10" key={i}>
                        <label  htmlFor="first_name" className="block mb-2">{translated.translated_1_2_vietnamese[keyName]}</label>
                            <input onChange={checkInput} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Here your answer" required/>
                            <div className="">
                                {active_correct ?(
                                    <img src={converstation.practice_translate.icon_correct}  className="inactive mt-10  md:w-8 sm:w-auto ml-auto mr-auto "/>
                                ):null}
                                {active_notcorrect?(
                                <img src={converstation.practice_translate.icon_notcorrect}  className="inactive mt-10  md:w-8 sm:w-auto ml-auto mr-auto "/>
                                ):null}
                            </div>
                        </div>
                    ))}
                    </>
                </div>
                </>
            );
        case converstation.practice_translate.item[1].title:
            return (
                <H1 children={state?.title} />
            );
        case converstation.practice_translate.item[2].title:
            return (
                <H1 children={state?.title} />
            );
        case converstation.practice_translate.item[3].title:
            return (
                <H1 children={state?.title} />
        );   
        case converstation.practice_translate.item[4].title:
            return (
                <H1 children={state?.title} />
        );           
      }
    }

      return (
        <>
        {state?.title ?  (<BodyPractice><div className="text-4xl my-4 p-10">{displayWords()}</div></BodyPractice>):<Error/>
       }  
  </>
  );
}

export default PracticeTranslatedIndex;
