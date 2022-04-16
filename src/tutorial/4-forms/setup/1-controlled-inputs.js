import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange


//Value property that reference some state value
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email) {
      const person = {id: new Date().getMilliseconds().toString(),
        firstName, email};
      setPeople([...people, person])
      setFirstName('')
      setEmail('')
      console.log(people)
    } else {
      console.log('empty values')
    }
  };

  return <>
    <article>
      <form className='form' onSubmit={(e)=>handleSubmit(e)}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name: </label>
          <input 
            type='text' 
            id='firstName' 
            name='firstName' 
            value={firstName} 
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input 
            type='text' 
            id='email' 
            name='email' 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>Add person</button>
      </form>
      {
        people.map((p)=> {
          const {id, firstName, email} = p;
          return <div key={id} className='item'>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </article>
  </>
};

export default ControlledInputs;
