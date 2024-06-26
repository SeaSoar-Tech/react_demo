import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./store_redux/modules/counterSlice";

import styles from "./styles/ReduxDemo.module.css";

import { fetchList } from "./store_redux/modules/channelSlice";

/*
redux demo:
1. counter: sync and async button
2. channel: async pull data from api

*/
export default function ReduxDemo() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const dispatch = useDispatch();
  // state.whichSlice.whichState
  const count = useSelector((state) => state.counter.value);
  const list = useSelector((state) => state.channel.list);


  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <>
      <h2>redux demo0: channel async pull data</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}> {JSON.stringify(item)} </li>
        ))}
      </ul>

      <hr />
      <h2>redux demo1: counter</h2>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <span className={styles.value}>{count}</span>

        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={() =>
            // defensive coding： 这里的input可能会输入 其他字符，Number(incrementAmount) 尝试转换，失败的话->NAN,  就用0
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </>
  );
}
