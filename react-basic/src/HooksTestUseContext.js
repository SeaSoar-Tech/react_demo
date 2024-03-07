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
function GrandChild(props) {
  const {count, setCount}= useContext(objContext);
  return (
    <div>
        <p>{`In the grandchild level ->  show count: ${count}`}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

const objContext = createContext(null);
function HooksTestUseContext() {
  const [count, setCount] = useState(0);

  return (
    <objContext.Provider value={{ count, setCount }}>
      <div>
        <h2>useContext example</h2>
        <p>{`In the grandfather level -> show count: ${count}`}</p>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <Child />
      </div>
    </objContext.Provider>
  );
}

export default HooksTestUseContext;
