export const DECREMENT = "DECREMENT";
export const reducerDecrement = (
  state: { count: any },
  action: { type: any }
) => {
  switch (action.type) {
    case DECREMENT:
      return { count: state.count-- };
    default:
      throw new Error();
  }
};
