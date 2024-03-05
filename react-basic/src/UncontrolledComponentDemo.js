import { useRef, useEffect } from "react";

/*
这里是一个uncontrolled component, 用ref来获取input的值
并且用useEffect来在页面加载时自动focus到input

*/

export default function UncontrolledComponentDemo(){

    const inputRef= useRef(null);


    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    const handleClick = (e) =>{
        console.log(e.target);
        console.dir(inputRef.current)
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <h2>UnControlled Component</h2>
            <input type="text" ref={inputRef}/>
            <br/>
            <button onClick={(e)=>handleClick(e)}>click</button>
        </div>
    )

}