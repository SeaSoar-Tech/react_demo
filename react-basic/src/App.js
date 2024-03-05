import HooksTestUseState from "./HooksTestUseState";
import HooksTestUseEffect from "./HooksTestUseEffect";
import HooksTestUseContext from "./HooksTestUseContext";
import ControlledComponentDemo from "./ControlledComponentDemo";
import UncontrolledComponentDemo from "./UncontrolledComponentDemo";
import HooksTestUseRef from "./HooksTestUseRef";
import Form from "./ForwardRefTest";


import { useState, createContext } from "react";
import _ from "lodash";

const delId = 1; //假设 index unknown, 是其他地方传进来的
const nf = "apple"; //假设 fruit unknown, 是其他地方传进来的

//不在同一文件 一定要export
export const FruitsContext = createContext("initial fruits");

function App() {
  const [fruits, setFruits] = useState(["apple", "pear", "berry"]); //假设是其他地方传进来的

  // delete usually use  filter that item
  const handleDel = (index, e) => {
    console.log(index, e);
    setFruits(fruits.filter((item, i) => i !== index));
  };

  // add usually use spread operator
  function handleAdd(newFruit) {
    setFruits([...fruits, newFruit]);
  }

  const handleSort = () => {
    setFruits(_.orderBy(fruits, _, "desc"));
  };

  const arr = [
    <p key="1">first</p>,
    <p key="2">second</p>,
    <p key="3">third</p>,
  ];

  //   const arr1 = ["apple", "pear", "berry"];

  //   console.log(nf);

  return (
    <div className="App">
      <FruitsContext.Provider value={fruits}>
        <h1>React App</h1>

        {arr.map((item, _) => {
          return item;
        })}
        <hr />

        <button onClick={handleSort}> sort list </button>
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

        <HooksTestUseState />

        <hr />

        <HooksTestUseEffect />

        <hr />

        <HooksTestUseContext />
      </FruitsContext.Provider>
      <hr />

      <ControlledComponentDemo />

      <hr />

      <UncontrolledComponentDemo />

        <hr />
        <HooksTestUseRef/>  

          <hr/>

        <Form />


    </div>
  );
}
export default App;
