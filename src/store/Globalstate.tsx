import React, { useReducer } from "react";
import SchoolContext from "./state";
import { reducerIncrement } from "./reducers/reducer-increment";
import { INCREMENT, RESET } from "./reducers/reducer-increment";
import { DECREMENT, reducerDecrement } from "./reducers/reducer-decrement";

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
  const [statePositive, dispatchCorrect] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateTestPositive, dispatchTestCorrect] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateNotCorrect, dispatchNotCorrect] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateTestNotCorrect, dispatchTestNotCorrect] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateTotal, dispatchTotal] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateTimer, dispatchTimer] = useReducer(reducerDecrement, {
    count: 10,
  });
  const [stateTestTotal, dispatchTestTotal] = useReducer(reducerIncrement, {
    count: 0,
  });
  const addincrement = () => {
    dispatchCorrect({ type: INCREMENT });
  };
  const addincrementTest = () => {
    dispatchTestCorrect({ type: INCREMENT });
  };
  const addincrementNegative = () => {
    dispatchNotCorrect({ type: INCREMENT });
  };
  const addincrementTestNegative = () => {
    dispatchTestNotCorrect({ type: INCREMENT });
  };
  const addincrementTotal = () => {
    dispatchTotal({ type: INCREMENT });
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
  return (
    <SchoolContext.Provider
      value={{
        countTotal: stateTotal.count,
        countTestTotal: stateTestTotal.count,
        countTimer: stateTimer.count,
        countPositive: statePositive.count,
        countTestPositive:stateTestPositive.count,
        countNegative: stateNotCorrect.count,
        countTestNegative:stateTestNotCorrect.count,
        incrementPositive: addincrement,
        incrementTestPositive: addincrementTest,
        incrementNegative: addincrementNegative,
        incrementTestNegative:addincrementTestNegative,
        incrementTotal: addincrementTotal,
        incrementTestTotal: addincrementTestTotal,

        timerDecrement: timerDecrement,
        reset:reset,
      }}
    >
      {props.children}
    </SchoolContext.Provider>
  );
};

export default GlobalState;
