import { useState } from "react";

function useToggle() {
  const [flag, setFlag] = useState(true);

  const toggle = () => {
    setFlag(!flag);
  };

  return [flag, toggle];
}

export default function CustomHookDemo() {
  const [flag, toggle] = useToggle();

  return (
    <>
      <h2> test custom hook demo</h2>
      <div>{flag && <p>CustomHookDemo</p>}</div>
      <button onClick={toggle}> toggle </button>
    </>
  );
}
