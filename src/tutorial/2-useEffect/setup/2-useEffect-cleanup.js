import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(()=>{
    console.log('change');
    //name of the event 'resize' is globally defined and can be found in event Listeners in the DevTools
    window.addEventListener('resize',checkSize);
    return(()=>{ // return in useEffect will only run when this function is invoked again  by something (return also knowns as cleanup funciton)
      console.log('remove');
      window.removeEventListener('resize',checkSize);
      // the above line will not let the previous values to be stored
    });
  })
  return <>
    <h1>Window Size</h1>
    <h3>{size} PX</h3>
  </>;
};

export default UseEffectCleanup;
