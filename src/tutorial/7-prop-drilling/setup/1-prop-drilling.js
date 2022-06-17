import React, {useState} from 'react';
import {data} from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
    const [people, setPeople] = useState(data)
    const removePerson = (id) => {
        let newPeople = people.filter((p) => p.id !== id);
        setPeople(newPeople)
    }

    return <section>
        <h3>Prop drilling</h3>
        <List people={people} removePerson={removePerson}/>
    </section>
};

const List = ({people, removePerson}) => {
    return <>
        {people.map(person => {
            return <SinglePerson key={person.id} person={person} removePerson={removePerson}/>
        })}
    </>
}

const SinglePerson = ({person, removePerson}) => {
    return <div className={'item'}>
        <h4>{person.name}</h4>
        <button onClick={()=>removePerson(person.id)}>Remove</button>
    </div>
}

export default PropDrilling;
