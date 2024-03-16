import { useMemo, useState, useContext } from "react";
import { FruitsContext } from "./App.js";
import MemoComponent from "./MemoComponent.js";

/*

useMemo 可以cache 变量，component， 函数 (相当于useCallBack)

*/

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fib(n) {
  //   console.log("fib run");
  if (n < 3) return 1;
  let f0 = 1;
  let f1 = 1;
  for (let i = 2; i < n; i++) {
    let cur = f1 + f0;
    f0 = f1;
    f1 = cur;
  }
  return f1;
}

const number = 100;

export default function HooksTestUseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //1.  use memo to skip expensive computation
  const res = useMemo(() => {
    //return the compute res
    return fib(count1); //in this function, it has some dependency variables to change its output, like input, 如果不把它们加到 dependency array, 这个只会 run 一遍, 如果是常量也行
  }, [count1]);

  // 当和 count1 无关的 元素导致 这个component rerender的时候 这下不会重复计算了
  // const res = fib(count1)

  console.log("parent component rerender");

  //2.  use memo to skip other component, like Child: 把component 包一下, 只有props 变了才会render Child； 如果 count2 是个 非state的 **引用类型**，那就再用一个useMemo单独 存它
  const children = useMemo(() => {
    return <Child count={count2} />;
  }, [count2]);

  const { arr, setArr } = useContext(FruitsContext);

  //   console.log(arr);
  //   console.log(setArr);

  const addApple = () => {
    setArr((pre) => [...pre, "apple"]);
  };

  return (
    <div>
      <h2>useMemo Demo</h2>
      <button onClick={() => setCount1((pre) => pre + 1)}>
        add count1 : {count1}
      </button>
      <button onClick={() => setCount2((pre) => pre + 1)}>
        add count2 : {count2}
      </button>
      <p>{res}</p>

      <h3>change context to test if it will render memo child</h3>
      <ul>
        {arr.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button onClick={addApple}> add apple to fruits array</button>
      {children}

      {/* 如果不用Memo 包一下的话，即使number 是const 也会每次跟着 父组件 rerender , 和MemoComponent 进行对比 */}
      <Child2 num={number} />
    


      <MemoComponent num={number} />


    </div>
  );
}

//test skip re-rendering of components
//如果child 里面用到了 context，还是会render的，没用到就不会
function Child({ count }) {
  console.log("child render");
  //   const { arr } = useContext(FruitsContext);

  return (
    <>
      <h4> Child count2 :{count}</h4>
      <ul>
        {/* {arr.map((item, i) => (
          <li key={i}>{item}</li>
        ))} */}
      </ul>
    </>
  );
}

function Child2({ num }) {
  console.log("child2 render");
  //   const { arr } = useContext(FruitsContext);

  return (
    <>
      <h4> Child2 num :{num}</h4>
    </>
  );
}
