import React, {useEffect, useState} from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('Call use effect')
        if (value > 0) {
            document.title = `new Messages(${value})`
        }
    }, [value]);

    useEffect(() => {
        console.log('initial render')

    }, []);

    console.log('render component')
    return (
        <>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
        </>
    )
};

export default UseEffectBasics;
