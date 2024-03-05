import { useState, useEffect } from "react";
/*

test useEffect hook


*/
export default function HooksTestUseEffect() {
  //自己定义的  返回的 是 object 不是 array
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(0);

  /* 
           unlike the lifecycle functions, useEffect可以把不同逻辑的东西 放在不同的useEffect 里面, async 
           可以完成lifecycle functions:
           1. didmount
           2. didupdate
           3. willunmount

     However, there's a crucial detail missing in the snippet for cleanup: as written, this useEffect does not clean up the timeout when the component unmounts or before re-running the effect due to a change in steps. This could lead to setting the state on an unmounted component, which is a common error in React.
            If you don't clear the timeout, and the component unmounts before the timer is up, the setCount function will try to update the state of an unmounted component, which can lead to memory leaks and errors.
           To prevent this, you should include a cleanup function:

           */
  useEffect(() => {
    const timer = setTimeout(
      ()=>setCount((preState) => preState % 5 === 0? preState + count : preState - 1),
      1000
    );
    return () => {
      clearTimeout(timer);
    };
  }, [steps]);

  return (
    <div>
      <h2>clicked {count}</h2>
      <h2>steps: {steps} </h2>
      <button onClick={() => setCount(count + 1)}>+count</button>

      <button onClick={() => setSteps(steps + 10)}>+step</button>
    </div>
  );
}
