import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {data} from "../../../data";

const Person = () => {
    const [name, setName] = useState('default')
    const {id} = useParams();

    useEffect(()=>{
        const newPerson = data.find((p)=>p.id===parseInt(id));
        setName(newPerson.name);
    }, [])

    return (
        <div>
            <h2>{name}</h2>
            <Link to={'/people'}>Back to people</Link>
        </div>
    );
};

export default Person;
