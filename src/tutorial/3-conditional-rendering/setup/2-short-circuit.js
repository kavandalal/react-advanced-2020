import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // in || operator, if the 'text' is true then 'text' will be returned 
  // in || operator, if the 'text' is false then 'hello world' will be returned 


  // const secondValue = text && 'hello world';
  // in && operator, if the 'text' is true then 'hello world' will be returned 
  // in && operator, if the 'text' is false then 'text' will be returned 


  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}

      {/* simple ternary operator  */}
      {isError ? 
      // true part 
      (
        <p>there is an error...</p>
      ) : 
      // false part 
      (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};
export default ShortCircuit;
