import React, {useState} from 'react';

const UseStateBasics = () => {
    const initialTitle = 'random title'
    //hook must be inside the component!!!
    const [text, setText] = useState(initialTitle)

    const handleClick = () => {
        if(text === initialTitle) {
            setText('hello world')
        } else {
            setText(initialTitle)
        }
    }

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button className='btn' onClick={handleClick}>
                Change title
            </button>
        </React.Fragment>
    )
};

export default UseStateBasics;
