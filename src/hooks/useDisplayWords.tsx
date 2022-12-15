export const useDisplayWords = (state: any) => {
  let arr: Array<any> = [];
  if (state?.title) {
    arr = JSON.parse(state?.array_data);
    console.log(arr);
    return arr;
  }
};
