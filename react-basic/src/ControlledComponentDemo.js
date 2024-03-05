import { useState } from "react";

export default function ControlledComponentDemo() {
  const [input, setInput] = useState("initial value");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h2>Controlled Component</h2>
      <input type="text" value={input} onChange={handleChange} />
      <p>{input}</p>
    </>
  );
}
