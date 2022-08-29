export const random=(object:any, arr:any)=> {
    for (let i = arr.length; arr.length < 10; i++) {
      const randomWord = object[Math.floor(Math.random() * object.length)];
      if (arr.indexOf(randomWord) === -1) {
        arr.push(randomWord);
      }
    }
  }