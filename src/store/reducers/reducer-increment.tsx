export const INCREMENT = "INCREMENT";
export const RESET = "RESET";
export const reducerIncrement = (
  state: { count: number },
  action: { type: string }
) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case RESET:
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
};
