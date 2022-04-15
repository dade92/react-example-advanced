import React, {useState} from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
            name: 'Davide',
            age: 29,
            message: 'random message'
        })
    const changeMessage = (person) => {
        //spread operator!!
        setPerson({...person, message: 'hello world'})
    }

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className='btn' onClick={() => changeMessage(person)}>Change message</button>
        </>
    )
};

export default UseStateObject;
