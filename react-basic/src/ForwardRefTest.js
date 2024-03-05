import { useRef } from 'react';
import MyInput from './MyInput.js';

/*
测试forwardRef 去获取 自己的 子组件的ref


*/
export default function Form() {

    const inputRef = useRef(null);


    return (
        <div>
            <h1>Get a ref from custome Child component</h1>
            <MyInput label = {"Enter your name"} initialVal = {"user name"} ref = {inputRef}>
                <p>this is the test for passing JSX to component</p>
            </MyInput>

            <button onClick={()=> {inputRef.current.focus()}}>focus</button>
        </div>
    );


}



