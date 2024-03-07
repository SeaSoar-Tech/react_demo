import { forwardRef } from "react";

//传进来的 ref 必须要绑定到 一个 原生的dom元素
const MyInput = forwardRef((props, ref)=>{
    console.log(props);
    const {label, initialVal, aa = 10, children} = props

    return (
        <div>
            {children}
            <div>default props {aa}</div>
            <label>{label}</label>
            <input ref={ref} type="text" placeholder={initialVal} />
        </div>
    )

})


export default MyInput;
