import React, { useReducer } from "react";
import SchoolContext from "./state";
import { reducerIncrement } from "./reducers/reducer-increment";
import { INCREMENT } from "./reducers/reducer-increment";

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
  const [stateNotCorrect, dispatchNotCorrect] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateTotal, dispatchTotal] = useReducer(reducerIncrement, {
    count: 0,
  });
  const addincrement = () => {
    dispatchCorrect({ type: INCREMENT });
  };
  const addincrementNegative = () => {
    dispatchNotCorrect({ type: INCREMENT });
  };
  const addincrementTotal = () => {
    dispatchTotal({ type: INCREMENT });
  };
  return (
    <SchoolContext.Provider
      value={{
        countTotal: stateTotal.count,
        countPositive: statePositive.count,
        countNegative: stateNotCorrect.count,
        incrementPositive: addincrement,
        incrementNegative: addincrementNegative,
        incrementTotal: addincrementTotal,
      }}
    >
      {props.children}
    </SchoolContext.Provider>
  );
};

export default GlobalState;
