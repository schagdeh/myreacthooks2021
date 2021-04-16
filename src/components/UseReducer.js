import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            use Reducer
            <p>{state}</p>
            <div>
                <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
                <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
            </div>
        </div>
    )
}

export default UseReducer
