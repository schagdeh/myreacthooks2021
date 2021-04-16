import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width)

    const actualWidth = () => {// this will trigger setWidthCount func which wil check the window inner width
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth)
    }

    useEffect(() => {
        // this effect wil listen to resize event and trigger a actualWidth() function 
        console.log("add event");
        window.addEventListener('resize', actualWidth); 
        
        return () => {
            // this will remove the resize event after listening to resize event.
            console.log("remove event");
            window.removeEventListener('resize', actualWidth); 
        }
        
    })

    return (
        <div>
            <p>the actual size of the window is:</p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffect2
