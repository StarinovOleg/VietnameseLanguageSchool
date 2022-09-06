import {createContext} from 'react';

interface Context {
  countTotal:number,
  countTimer:number,
  countPositive: number,
  countNegative:number,
  incrementNegative: any,
  incrementPositive:any;
  incrementTotal:any
  timerDecrement:any
}
const SchoolContext = createContext<Context>({
  countTotal:0,
  countTimer:0,
  countPositive: 0,
  countNegative:0,
  incrementNegative:'',
  incrementPositive:'',
  incrementTotal:'',
  timerDecrement:10
});

export default SchoolContext;