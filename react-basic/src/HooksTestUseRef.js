import { useRef, useState } from "react";
/*
refs are perfect for storing information that doesn’t affect the visual output of your component.
regular variable will reset every time the component re-renders, but ref will not.

*/
export default function HooksTestUseRef() {

    const[ start, setStart ] = useState(null);
    const[ now, setNow ] = useState(null);
    const intervalIdRef = useRef(null);

    const handleStart = () => {
        setStart(Date.now());
        setNow(Date.now());

        //启动新的interval之前，先清除之前的interval
        clearInterval(intervalIdRef.current);

        intervalIdRef.current = setInterval(() => {
            setNow(Date.now());
        }, 1);
    }

    const handleStop = () => {
        clearInterval(intervalIdRef.current);
    }

    const handleReset = () => {
        clearInterval(intervalIdRef.current);
        setNow(Date.now()); 
        setStart(Date.now())
    }
    
    let elapseTime = 0;
    if(start != null && now != null){
        elapseTime = (now - start)/1000;
    }

    return (
        <div>
            <h1>useRef stop watch example</h1>
            <h2>{elapseTime.toFixed(3)}</h2>
            
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            <button onClick={handleReset}>reset</button>


        </div>
    );

}