import {createContext} from 'react';

interface Context {
  countTotal:number
  countPositive: number,
  countNegative:number,
  incrementNegative: any,
  incrementPositive:any;
  incrementTotal:any
}
const SchoolContext = createContext<Context>({
  countTotal:0,
  countPositive: 0,
  countNegative:0,
  incrementNegative:'',
  incrementPositive:'',
  incrementTotal:'',
});

export default SchoolContext;