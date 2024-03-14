import { useMemo, useState } from "react";


//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fib(n){
    console.log("fib run");
    if(n < 3) return 1;
    let f0 = 1
    let f1 = 1
    for(let i = 2; i < n ; i++){
        let cur = f1+ f0;
        f0 = f1;
        f1 = cur;
    }
    return f1
}


export default function HooksTestUseMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    
    // use memo to skip other  component render
    const res = useMemo(()=>{
        //return the compute res
        return fib(count1) //in this function, it has some dependency variables to change its output, like input, 如果不把它们加到 dependency array, 这个只会 run 一遍
    }, [count1])

    // 当和 count1 无关的 元素导致 这个component rerender的时候 这下不会重复计算了
    // const res = fib(count1)

    console.log("component rerender");

    return (
    <div>
      <h2>useCallback Demo</h2>
      <button onClick={() => setCount1((pre) => pre + 1)}> add count1 : {count1}</button>
      <button onClick={() => setCount2((pre) => pre + 1)}> add count2 : {count2}</button>
      <p>{res}</p>
    </div>
  );
}
