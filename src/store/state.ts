import {createContext} from 'react';

interface Context {
  countTotal:number,
  countTestTotal:number,
  countTimer:number,
  countPositive: number,
  countTestPositive:number,
  countNegative:number,
  countTestNegative:number,
  incrementNegative: any,
  incrementPositive:any,
  incrementTotal:any,
  incrementTestTotal:any,
  incrementTestPositive:any,
  incrementTestNegative:any,
  timerDecrement:any,
  reset:any,
  resetLesson:any
}
const SchoolContext = createContext<Context>({
  countTotal:0,
  countTestTotal:0,
  countTimer:10,
  countPositive: 0,
  countTestPositive:0,
  countNegative:0,
  countTestNegative:0,
  incrementNegative:'',
  incrementPositive:'',
  incrementTestPositive:'',
  incrementTotal:'',
  incrementTestTotal:'',
  incrementTestNegative:'',
  timerDecrement:'',
  reset:'',
  resetLesson:''
});

export default SchoolContext;