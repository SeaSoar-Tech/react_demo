// import { useBrearStore , useFetchDataStore, useStore} from "./zustandStores"
import useStore from "./store_zustand/index.js";

import { useEffect } from "react";
export default function ZustandDemo() {
  // const {increase, removeAll, bears} = useBrearStore();
  // const {list, getList} = useFetchDataStore();

  const { increase, removeAll, bears, list, getList } = useStore();

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <h2>Zustand Demo</h2>

      <h3> bears store demo</h3>
      <p> bears: {bears}</p>
      <button onClick={increase}>increase</button>
      <button onClick={removeAll}>remove all</button>

      <h3> global data list store demo</h3>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </div>
  );
}
