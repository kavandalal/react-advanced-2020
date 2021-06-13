import React, { useState } from 'react';

const UseStateObject = () => {
  const data = {name:'kavan' , age :20 , msg : 'Hey'}
const [person,setPerson] = useState(data);
const changeMessage = () => {
  if(person.msg === 'Hey'){
  setPerson({...person , msg : 'Hello'})
  //...person = sprad operator 
  // here '...person' will copy all the content of person for the new value and after ',' the value that you want to change will from object has to be written
  // you can change more than 1 value in setPerson of object wit adding ','
  }
  else {
    setPerson({...person , msg : 'Hey'})
  }
}
  return <>
   <div>
     <h2>{person.name}</h2>
     <h2>{person.age}</h2>
     <h2>{person.msg}</h2>
     <button className='btn' onClick={changeMessage}>
        Change Message
     </button>
   </div>
  </>;
};

export default UseStateObject;
