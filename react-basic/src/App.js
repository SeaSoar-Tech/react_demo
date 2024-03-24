import { useState, createContext } from "react";
import _ from "lodash";

import HooksTestUseState from "./HooksTestUseState";
import HooksTestUseEffect from "./HooksTestUseEffect";
import HooksTestUseContext from "./HooksTestUseContext";
import ControlledComponentDemo from "./ControlledComponentDemo";
import UncontrolledComponentDemo from "./UncontrolledComponentDemo";
import HooksTestUseRef from "./HooksTestUseRef";
import Form from "./ForwardRefTest";
import CustomHookDemo from "./CustomHookDemo";
import APITest from "./APITest";
import ZustandDemo from "./ZustandDemo";
import HooksTestUseReducer from "./HooksTestUseReducer";
import HooksTestUseMemo from "./HooksTestUseMemo";
import ReduxDemo from "./ReduxDemo";

const flag = false; // to hide some content
const delId = 1; //假设 index unknown, 是其他地方传进来的
const nf = "apple"; //假设 fruit unknown, 是其他地方传进来的

//不在同一文件 一定要export
export const FruitsContext = createContext([]);

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
      <ReduxDemo />

      <hr />
      <FruitsContext.Provider value={{ arr: fruits, setArr: setFruits }}>
        <HooksTestUseMemo />
        <hr />
      </FruitsContext.Provider>

      <HooksTestUseReducer />
      <hr />

      {flag ? (
        <>
          <ZustandDemo />

          <hr />

          <APITest />

          <hr />

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
          <HooksTestUseRef />

          <hr />

          <Form />

          <hr />
          <CustomHookDemo />
        </>
      ) : null}
    </div>
  );
}
export default App;
