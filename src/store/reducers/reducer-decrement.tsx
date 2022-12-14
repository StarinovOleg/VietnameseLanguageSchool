export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const reducerDecrement = (
  state: { count: any },
  action: { type: string }
) => {
  switch (action.type) {
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: (state.count = 10) };
    default:
      throw new Error();
  }
};
