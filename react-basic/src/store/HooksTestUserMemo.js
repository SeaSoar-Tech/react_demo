import { useMemo } from "react";

export default function HooksTestUserMemo() {


    const memoizedValue = useMemo(() => {
        return 10;
    }, []);
    
    return (
        <div>
        <h2>useMemo Demo</h2>
        <p>Value: {memoizedValue}</p>
        </div>
    );
}