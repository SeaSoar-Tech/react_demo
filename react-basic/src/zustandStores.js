import { create } from "zustand";

/*
1. 调用 create 函数 创建stores
1.1 create接受一个 cb 函数作为参数，该 cb 返回一个对象，该对象包含了所有的状态和更新状态的方法
1.2 该 cb 函数接受一个 set 函数作为参数，该 set 是用来更新状态的 专门的方法，必须调用它来更新状态

set(obj)

语法1：接受一个cb函数作为参数，该cb函数接受一个参数，该参数是当前的状态，返回一个对象 set((state.xx)=>{return {xx: state.xx + 1}})
用这个方法， 要注意 参数是state.xx，不是直接用state的名字

语法2：接受一个对象作为参数，该对象包含了所有的状态和更新状态的方法 set({count: 100})
用这个方法， 直接用state的名字


更规范的 写法 是单独搞一个 store 文件夹，然后把所有的store都放在这个文件夹下，然后在index.js中导出所有的store

*/

export const useBrearStore = create((set) => {
  return {
    area: "forest",
    bears: 0,

    increase: () =>
      set((state) => {
        //因为state 是一个对象 包含了所有state属性和方法，所以要返回一个新的对象来覆盖对应的属性
        console.log(state);
        return { bears: state.bears + 1 };
      }),
    removeAll: () => set({ bears: 0 }),
  };
});

const url = "http://localhost:3004/data";

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

export const useFetchDataStore = create((set) => {
  return {
    list: [],
    getList: async () => {
      try {
        await sleep(2000);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("network error");
        }
        console.log(response);
        const data = await response.json(); // 这里必须加await，response.json()是在异步解析一个promise否则会返回一个promise pending
        console.log(data);
        set({ list: data });
      } catch (e) {
        console.log("error happens:  " + e.message);
      }
    },
  };
});

const createBearsStore = (set) => {
  return {
    area: "forest",
    bears: 0,

    increase: () =>
      set((state) => {
        //因为state 是一个对象 包含了所有state属性和方法，所以要返回一个新的对象来覆盖对应的属性
        console.log(state);
        return { bears: state.bears + 1 };
      }),
    removeAll: () => set({ bears: 0 }),
  };
};

const createListStore = (set) => {
  return {
    list: [],
    getList: async () => {
      try {
        await sleep(2000);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("network error");
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        set({ list: data });
      } catch (e) {
        console.log("error happens:  " + e.message);
      }
    },
  };
};

export const useStore = create((...a) => ({
  ...createBearsStore(...a),
  ...createListStore(...a),
}));
