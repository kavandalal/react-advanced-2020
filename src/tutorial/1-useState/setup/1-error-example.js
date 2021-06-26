import React from 'react';

const ErrorExample = () => {
  let title = "Random Text"
  const ClickBtn = () => {
    console.log(title)
  }
  return (
    <>
      <p>Error Example</p>
      <h2>{title}</h2>
      <button type="button" className='btn' onClick={ClickBtn}>
        change Title
      </button>

    </>

  );
};

export default ErrorExample;
