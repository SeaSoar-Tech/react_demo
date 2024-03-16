import { memo } from "react";

const MemoComponent = memo(
  //if props是 引用类型，则还需 在 使用 MemoComponent 的地方 配合 useMemo or useCallback
  function OriginalComponent({ num }) {
    console.log("React.memo component render");
    return (
      <>
        <h2>React.memo demo</h2>
        <p>{num}</p>
      </>
    );
  }
);

export default MemoComponent;
