function App() {
  const arr = [
    <p key="1">first</p>,
    <p key="2">second</p>,
    <p key="3">third</p>,
  ];

  const arr1 = ["apple", "pear", "berry"];

  return (
    <div className="App">
      <h1>React App</h1>

      {arr.map((item, _) => {
        return item;
      })}

      <ul>
        {arr1.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>





    </div>
  );
}

export default App;
