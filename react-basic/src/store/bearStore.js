export const createBearsStore = (set) => {
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
