export const random=(object:any, arr:any)=> {
    for (let i = arr.length; arr.length < 10; i++) {
      const randomWord = object[Math.floor(Math.random() * object.length)];
      if (arr.indexOf(randomWord) === -1) {
        arr.push(randomWord);
      }
    }
  }

export const chooseRandom = (arr:any, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * arr.length);
       if(res.indexOf(arr[random]) !== -1){
          continue;
       };
       res.push(arr[random]);
       i++;
    };
    return res;
 };