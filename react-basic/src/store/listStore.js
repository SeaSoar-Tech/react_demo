const url = "http://localhost:3004/data";


// async demo for zustand

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

export const createListStore = (set) => {
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
