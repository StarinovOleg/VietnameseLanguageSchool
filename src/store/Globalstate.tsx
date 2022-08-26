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
  const [state, dispatch] = useReducer(reducerIncrement, {
    count: 0,
  });
  const [stateNotCorrect, dispatchNotCorrect] = useReducer(reducerIncrement, {
    count: 0,
  });
  const addincrement = () => {
    dispatch({ type: INCREMENT });
  };
  const addincrementNegative = () => {
    dispatchNotCorrect({ type: INCREMENT });
  };
  return (
    <SchoolContext.Provider
      value={{
        count: state.count,
        countNegative: stateNotCorrect.count,
        increment: addincrement,
        incrementNegative: addincrementNegative,
      }}
    >
      {props.children}
    </SchoolContext.Provider>
  );
};

export default GlobalState;
