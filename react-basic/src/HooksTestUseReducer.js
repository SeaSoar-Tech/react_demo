import  { useReducer } from "react";
/*
用于测试useReducer， 这个hook 类似 useState， 但能包含 更为复杂的 state 和 改变状态的 方法

*/
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return  state + 1 ;
    case "dec":
      return  state - 1 ;
    case "set":
      return action.payload ;
    default:
      return state;
  }
}



export default function HooksTestUseReducer() {
  const [state, dispatch] = useReducer(reducer, 0);

  const payload = 10;

  return (
    <div>
      <h2>useReducer Demo</h2>
      Count: {state}
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "set" , payload: payload})}>set 10</button>
    </div>
  );
}