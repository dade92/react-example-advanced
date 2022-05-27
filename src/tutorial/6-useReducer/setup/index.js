import React, {useReducer, useState} from 'react';
// reducer function
import {data} from "../../../data";
import Modal from "./Modal";
import {reducer, defaultState} from './reducer'

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = {id: new Date().getTime().toString(), name: name}
            dispatch({type: 'ADD_ITEM', payload: newItem})
            setName('')
        } else {
            dispatch({type: 'NO_VALUE'})
        }
    }

    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'})
    }

    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <button type='submit'>Add</button>
                </div>
            </form>
            {state.people.map((person) => {
                return <div key={person.id} className='item'>
                    <h4>{person.name}</h4>
                    <button onClick={() => dispatch(
                        {type: 'REMOVE_ITEM', payload: person.id}
                    )}>Remove item</button>
                </div>
            })}
        </>
    )
};

export default Index;
