import { useState } from "react";






export default function ReduxDemo(){
    const [count, setCount] = useState(0)
    return (

        <>
            <h2>redux demo</h2>       
            <p>Count: {}</p> 
            <button>+</button>
            <button>-</button>
        </>


    )


}