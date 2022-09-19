export const sound=(s:string)=>{
    let audio = new Audio(); 
    audio.src = s; 
    audio.autoplay = true; 
    audio.volume=0.1;
  }