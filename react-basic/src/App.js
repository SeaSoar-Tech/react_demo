import HooksTest1 from "./HooksTest1";
import HooksTest2 from "./HooksTest2";
import { useState } from "react";

const delId = 1; //假设 index unknown, 是其他地方传进来的
const nf = "apple"; //假设 fruit unknown, 是其他地方传进来的

function App() {
  const [fruits, setFruits] = useState(["apple", "pear", "berry"]); //假设是其他地方传进来的

  // delete usually use  filter that item
  const handleDel = (index, e) => {
    console.log(index, e);
    setFruits(fruits.filter((item, i) => i !== index));
  };

  function handleAdd(newFruit) {
    setFruits([...fruits, newFruit]);
  }

  const arr = [
    <p key="1">first</p>,
    <p key="2">second</p>,
    <p key="3">third</p>,
  ];

  //   const arr1 = ["apple", "pear", "berry"];

  return (
    <div className="App">
      <h1>React App</h1>

      {arr.map((item, _) => {
        return item;
      })}

      <ul>
        {fruits.map((item, index) => {
          return (
            <li key={index}>
              {item}{" "}
              {index === delId && (
                <button
                  className="del-btn"
                  onClick={(e) => handleDel(index, e)}
                >
                  del
                </button>
              )}{" "}
            </li>
          );
        })}
      </ul>

      <hr />

      <button className="add-btn" onClick={() => handleAdd(nf)}>
        add &nbsp; {nf}
      </button>

      <hr />

      <HooksTest1 />

      <hr />
      
      <HooksTest2 />
    </div>
  );
}

export default App;
