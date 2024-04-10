import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
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

export const incrementAsync = (amount) => {
  
  
  /*
  1.getState.whichSlice.whichState
  whichSlice is the name attribute of slice

  2. (dispatch, getState) 这2个参数是 Thunk 默认插入的
  */
    return (dispatch, getState) => {


      console.log("dispatch: " + dispatch);
      console.log("getState: " + getState);
      console.log("getState(): " + getState().counter.value);
      console.log("getState(): " + getState().counter.purpose);
    

    /*
    这里的 1s 和 css file里的 1s 配合
    transition: width 1s linear, opacity 0.5s ease 1s;
    要改 时间的话  一起改
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
