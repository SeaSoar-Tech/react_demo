import { forwardRef } from "react";


const MyInput = forwardRef((props, ref)=>{
    console.log(props);
    const {label, initialVal, aa = 10, children} = props

    return (
        <div>
            {children}
            <div>default props {aa}</div>
            <label>{label}</label>
            <input ref={ref} type="text" defaultValue={initialVal} />
        </div>
    )

})


export default MyInput;
