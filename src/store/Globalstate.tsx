import React, { useReducer } from "react";
import SchoolContext from "./state";
import { reducerIncrement } from "./reducers/reducer-increment";
import { reducerSound } from "./reducers/reducer-sound";
import { INCREMENT, RESET } from "./reducers/reducer-increment";
import { DECREMENT, reducerDecrement } from "./reducers/reducer-decrement";
import { SOUND_NEGATIVE, SOUND_POSITIVE } from "./reducers/reducer-sound";
import { useLocation, useNavigate } from "react-router-dom";

interface location {
  array_data: any;
  title: any;
  subtitle: any;
}
const GlobalState = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as location;
  const [statePositive, dispatchCorrect] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateTestPositive, dispatchTestCorrect] = useReducer(
    reducerIncrement,
    {
      count: 0,
    }
  );
  const [stateNotCorrect, dispatchNotCorrect] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateTestNotCorrect, dispatchTestNotCorrect] = useReducer(
    reducerIncrement,
    {
      count: 0,
    }
  );
  const [stateTotal, dispatchTotal] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateTimer, dispatchTimer] = useReducer(reducerDecrement, {
    count: 10,
  });
  const [stateTestTotal, dispatchTestTotal] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateSoundNegative, dispatchSoundNegative] = useReducer(reducerSound, {
    sound: "",
  });
  const addincrement = () => {
    dispatchCorrect({ type: INCREMENT });
    dispatchSoundNegative({ type: SOUND_POSITIVE });
  };
  const addincrementTest = () => {
    dispatchTestCorrect({ type: INCREMENT });
  };
  const addincrementNegative = () => {
    dispatchNotCorrect({ type: INCREMENT });
    dispatchSoundNegative({ type: SOUND_NEGATIVE });
  };
  const addincrementTestNegative = () => {
    dispatchTestNotCorrect({ type: INCREMENT });
  };
  const addincrementTotal = () => {
    dispatchTotal({ type: INCREMENT });
    //redirect on done screen
    if (stateTotal.count >= 9) {
      navigate("/endtest", {
        replace: true,
        state: { title: `${state.title}` },
      });
    }
  };
  const addincrementTestTotal = () => {
    dispatchTestTotal({ type: INCREMENT });
  };
  const timerDecrement = () => {
    dispatchTimer({ type: DECREMENT });
  };
  const reset = () => {
    dispatchTestCorrect({ type: RESET });
    dispatchTestNotCorrect({ type: RESET });
    dispatchTestTotal({ type: RESET });
  };
  const resetLesson = () => {
    dispatchCorrect({ type: RESET });
    dispatchNotCorrect({ type: RESET });
    dispatchTotal({ type: RESET });
    dispatchTimer({ type: RESET });
  };
  return (
    <SchoolContext.Provider
      value={{
        countTotal: stateTotal.count,
        countTestTotal: stateTestTotal.count,
        countTimer: stateTimer.count,
        countPositive: statePositive.count,
        countTestPositive: stateTestPositive.count,
        countNegative: stateNotCorrect.count,
        countTestNegative: stateTestNotCorrect.count,
        incrementPositive: addincrement,
        incrementTestPositive: addincrementTest,
        incrementNegative: addincrementNegative,
        incrementTestNegative: addincrementTestNegative,
        incrementTotal: addincrementTotal,
        incrementTestTotal: addincrementTestTotal,

        timerDecrement: timerDecrement,
        reset: reset,
        resetLesson: resetLesson,
      }}
    >
      {props.children}
    </SchoolContext.Provider>
  );
};

export default GlobalState;
