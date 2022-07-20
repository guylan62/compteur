import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCount] = useState(1);

    const min = () => {
        if(counter){
            setCount(counter - 1);
        }
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <>
            <h1>Compteur</h1>
            <button onClick={min}>-</button>
            {counter}
            <button onClick={() => setCount(counter + 1)}>+</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter;