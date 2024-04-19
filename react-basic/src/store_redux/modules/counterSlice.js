import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    //这里名字无所谓，反正default export，index.js里面的名字重要
  name: "counter",
  initialState: {
    value: 0,
    purpose: "counting"
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// redux的 异步函数(异步 action creator) 要单独拿出来封装一个，返回一个 异步action函数(不是同步action对象)
// zustand 异步可以直接 写在store的方法里面
export const incrementAsync = (amount) => {
  
  /*
  1.getState.whichSlice.whichState
  whichSlice is the name attribute of slice

  2. (dispatch, getState) 这2个参数是 Thunk 默认插入的
  */
    // 这里没加async 是因为 该函数里面没异步请求行为
    return (dispatch, getState) => {


      console.log("dispatch: " + dispatch);
      console.log("getState: " + getState);
      console.log("getState(): " + getState().counter.value);
      console.log("getState(): " + getState().counter.purpose);
    

    /*
    这里的 1s 和 css file里的 1s 配合
    transition: width 1s linear, opacity 0.5s ease 1s;
    要改 时间的话  一起改

    异步 action creator里面 调用同步 action creator 设置状态
    */
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };
};

console.log("counterSlice.reducer: " + counterSlice.reducer);
console.log("counterSlice.actions: " + counterSlice.actions);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
