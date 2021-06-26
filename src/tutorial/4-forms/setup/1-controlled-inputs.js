import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //without the above line JS will refresh the page once the submit button is pressed 

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName:firstName, email:email };
      // const person = { id: new Date().getTime().toString(), fName:firstName, mail:email };
      //above both lines will work

      console.log(person);
      setPeople((people) => {
        return [...people, person];
        // ...people will include the previous values in people and peorsaon will be added to that object 
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <p>Controlled Inputs</p>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='fName'
              name='fName' // name is not used in this example anywhere it will be used in 2 - multiple inputs
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              // without onChange in react you wont be able to write in the input box 
              //.target.value will get the value that is written by the user and will be printed in the input box
              //.value means itwill get the value written inside the box 
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='mail'
              name='mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          //the variable above should be same as that of defined in person 
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
