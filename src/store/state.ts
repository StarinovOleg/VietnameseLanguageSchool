import {createContext} from 'react';

interface Context {
  countTotal:number,
  countTestTotal:number,
  countTimer:number,
  countPositive: number,
  countTestPositive:number,
  countNegative:number,
  countTestNegative:number,
  incrementNegative: () => void |null,
  incrementPositive:() => void | null,
  incrementTotal:() => void | null,
  incrementTestTotal:() => void | null,
  incrementTestPositive:() => void | null,
  incrementTestNegative:() => void | null,
  timerDecrement:() => void | null,
  reset:() => void | null,
  resetLesson:() => void | null
}
const SchoolContext = createContext<Context>({
  countTotal:0,
  countTestTotal:0,
  countTimer:10,
  countPositive: 0,
  countTestPositive:0,
  countNegative:0,
  countTestNegative:0,
  incrementNegative:() => {},
  incrementPositive:()=>{},
  incrementTestPositive:()=>{},
  incrementTotal:()=>{},
  incrementTestTotal:()=>{},
  incrementTestNegative:()=>{},
  timerDecrement:()=>{},
  reset:()=>{},
  resetLesson:()=>{}
});

export default SchoolContext;