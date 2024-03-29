import { useContext, createContext, useState } from "react";
import { FruitsContext } from "./App.js"; //不是default export, 所以要用{}包裹

// 这个是用来测试useContext hook

function Child(props) {
  let fruits = useContext(FruitsContext);
  console.log(fruits);
  return (
    <>
      <div>
        {fruits.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <h3>grand child use obj context</h3>
      <GrandChild />
    </>
  );
}

// 这个是来测试 useContext 包含 object 的情况
function GrandChild(props) {
  const {count, setCount}= useContext(ObjContext);
  return (
    <div>
        <p>{`In the grandchild level ->  show count: ${count}`}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

const ObjContext = createContext(null);
function HooksTestUseContext() {
  const [count, setCount] = useState(0);

  return (
    <ObjContext.Provider value={{ count, setCount }}>
      <div>
        <h2>useContext example</h2>
        <p>{`In the grandfather level -> show count: ${count}`}</p>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <Child />
      </div>
    </ObjContext.Provider>
  );
}

export default HooksTestUseContext;
