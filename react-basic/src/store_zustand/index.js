import { createBearsStore } from "./bearStore";
import { createListStore } from "./listStore";
import { create } from "zustand";

const useStore = create((...a) => {
  return {
    ...createBearsStore(...a),
    ...createListStore(...a),
  };
});

export default useStore;
