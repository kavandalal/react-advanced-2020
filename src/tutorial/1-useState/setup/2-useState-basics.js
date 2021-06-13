import React, { cloneElement, useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  const [value, setValue] = useState('old title');
  // console.log(value, setValue);
  const ChangeTitle = () => {
    if (value === 'old title') {
      setValue('new title')
    }
    else {
      setValue('old title')
    }
  }
  return <>
    <h1>{value}</h1>
    <button type='button' className='btn' onClick={ChangeTitle}>
      Change Title
    </button>
  </>;
};

export default UseStateBasics;
