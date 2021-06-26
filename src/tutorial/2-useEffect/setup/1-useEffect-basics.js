import React, { useState, useEffect } from 'react';
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  
  // by default useEffect runs after every re-render
  // cleanup function
  // it can work without the second para but will reload after clicking any button
  // if second parameter is empty(as an empty list) it will work only 1 time (initial time) not after that 
  // if second para is given as a variable and that variable's value is changed then that function will run 
  // in our case we will give 'value' as a para 
  // only when value of variable 'value' will change then and only then that function will run 

    // useEffect (()=>{},[]);//Syntax of use effect 
    useEffect (()=>{
      console.log(value);
      if(value > 0){
        document.title = (`(${value}) New Message`)
      }
    },[value]);
  return <>
  <p>useEffect Basics</p>
    <h2>{value}</h2>
    <button type='button' className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
  </>;
};

export default UseEffectBasics;
