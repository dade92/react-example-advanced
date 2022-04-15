import React, {useState} from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0)
    const increase = (x) => {
        setValue(x + 1)
    }

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>Regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
                <button className='btn' onClick={() => increase(value)}>Increase</button>
                <button className='btn' onClick={() => setValue(0)}>Reset</button>
            </section>
        </>
    )
};

export default UseStateCounter;
