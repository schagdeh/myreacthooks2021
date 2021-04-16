import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        //console.log('helo useEffect');
        document.title = `Chats (${count})`
    })
    console.log('helo outside');
    return (
        <div>
            Use Effect
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}

export default UseEffect
