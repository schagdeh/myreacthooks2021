import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        //console.log('helo useEffect');
        // we can use condition within hooks but we cannot use hooks within conditions.
        if(count >= 1) {
            document.title = `Chats (${count})`
        } else {
            document.title = "Chats"
        }
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
