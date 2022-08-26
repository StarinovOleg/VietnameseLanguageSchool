import {createContext} from 'react';

interface Context {
  count: number,
  countNegative:number,
  incrementNegative: any,
  increment:any;
}
const SchoolContext = createContext<Context>({
  count: 0,
  countNegative:0,
  incrementNegative:'',
  increment:'',
});

export default SchoolContext;