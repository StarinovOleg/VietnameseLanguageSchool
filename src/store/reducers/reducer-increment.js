import { useReducer } from "react";

const initialState = { count: 0 };
const reducerIncrement = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
};
export const GetReducer = () => {
  return useReducer(reducerIncrement, initialState);
};
