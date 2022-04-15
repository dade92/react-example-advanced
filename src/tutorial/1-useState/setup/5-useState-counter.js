import React, {useState} from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0)
    const [anotherValue, setAnotherValue] = useState(0)

    const increase = (x) => {
        setValue(x + 1)
    }
    const decrease = () => {
        setValue(value - 1)
    }
    const complexIncrease = (x) => {
        setTimeout(() => {
            // setAnotherValue(x + 1)
             setAnotherValue((prevState)=>{
                 return prevState + 1
            })
        }, 2000)
    }

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>Regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => decrease()}>Decrease</button>
                <button className='btn' onClick={() => increase(value)}>Increase</button>
                <button className='btn' onClick={() => setValue(0)}>Reset</button>
            </section>
            <section>
                <h2>More Complex counter</h2>
                <h1>{anotherValue}</h1>
                <button className='btn' onClick={() => complexIncrease(anotherValue)}>Complex increase</button>
            </section>

        </>
    )
};

export default UseStateCounter;
