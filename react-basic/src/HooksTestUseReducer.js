import  { useReducer } from "react";


export default function HooksTestUseReducer() {
//   const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}