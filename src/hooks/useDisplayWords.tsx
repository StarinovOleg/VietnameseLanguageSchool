export const useDisplayWords = (state: any) => {
  let arr: Array<any> = [];
  if (state?.title) {
    arr = JSON.parse(state?.array_data);
    //console.log(arr);
    return arr;
  }
};

export const useDisplayWords1 = (state: any) => {
  let arr_vietnamese: Array<any> = [];
  if (state?.title) {
    arr_vietnamese = JSON.parse(state?.array_data_vietnamese);
    //console.log(arr);
    return arr_vietnamese;
  }
};
