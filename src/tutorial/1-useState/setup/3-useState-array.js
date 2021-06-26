import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    setPeople((oldPeople)=>{
      const newPeople = oldPeople.filter((person) => person.id !== id)
      return newPeople
    });
  }
  return <>
  <p>useState array</p>
    {/* <></> same as React.Fragment */}
    {people.map((person) => {
      const { id, name } = person;
      return (
        <div key={id} className='item'>
          <h3>{id} {name}</h3>
          {/* when we have an array to pe passed, it has to defined with the arrow function as shown below in onClick */}
          <button type='button' onClick={() => removeItem(id)}>Remove</button>
        </div>
      );
    })}
    <button className='btn' onClick={() => setPeople([])}>
      Remove All
    </button>
    <button className='btn' onClick={() =>{
      window.location.reload();
      }}>
      Refresh
    </button>
  </>;
};

export default UseStateArray;
