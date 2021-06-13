import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count,setCount] = useState(0);
  const dec = () => {
    setCount( count - 1 );
  }
const reset = () => {
    setCount( 0 );
  }
  const inc = () => {
    setCount( count + 1 );
  }
  const complexInc = () => {
    //synatx of setTimeout(FUNCTION,TIME(MS))
    setTimeout(()=>{
      // setCount(count + 1) 
      // the above line will work but if you click more than 1 time it will register only for 1 count as the timeout is 2sec(2000ms)


      setCount((prevCount)=>{
        return prevCount +1 
        //the above function will work perfectly even if you press more than once as by default the setCount will get the value of count as argument 
        //and in our case count == prevCount it wont wait for 2sec to return the value 
      })
    },2000);
  }
  return <>
    <h2>Regular Counter</h2>
    <h2>{count}</h2>
    <button className='btn'onClick={dec}>Decrease</button>
    <button className='btn'onClick={reset}>Reset</button>
    <button className='btn'onClick={inc}>Increase</button>

    <h2>Delay Counter</h2>
    <h2>{count}</h2>
    <button className='btn' onClick={complexInc}>Delay Increase</button>
    
</>;
};

export default UseStateCounter;
