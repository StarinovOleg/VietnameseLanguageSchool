export const INCREMENT = "INCREMENT";
export const RESET = "RESET";
export const reducerIncrement = (
  state: { count: any },
  action: { type: any }
) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case RESET:
      return { count: state.count = 0};
    default:
      return { count: state.count};
  }
};



