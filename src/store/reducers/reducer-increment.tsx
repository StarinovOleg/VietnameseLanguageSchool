export const INCREMENT = "INCREMENT";
export const reducerIncrement = (
  state: { count: any },
  action: { type: any }
) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
};
