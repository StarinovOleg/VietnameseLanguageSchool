import React from "react";
import { converstation } from "../../../store/static";

function Input(props: {
  onChange?: React.EventHandler<any>;
  onInput?: () => void;
  sentence?: string;
  value?: string | number | readonly string[] | undefined;
  active_correct?: boolean;
  active_notcorrect?: boolean;
}) {
  return (
    <>
      <label htmlFor="first_name" className="block mb-2  text-xl">
        {props.sentence}
      </label>
      <input
        onChange={props.onChange}
        onInput={props.onInput}
        value={props.value}
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <>
        {props.active_correct ? (
          <img
            src={converstation.practice_translate.icon_correct}
            className="inactive mt-10  md:w-8 sm:w-auto ml-auto mr-auto "
            alt="icon correct"
          />
        ) : null}
        {props.active_notcorrect ? (
          <img
            src={converstation.practice_translate.icon_notcorrect}
            className="inactive mt-10  md:w-8 sm:w-auto ml-auto mr-auto "
            alt="icon not correct"
          />
        ) : null}
      </>
    </>
  );
}

export default Input;
