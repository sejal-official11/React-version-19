import { useState, useEffect } from "react";

export const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
    
  }, []);

  return (
    <>
      <h1>My solved Coding Questions on Leetcode</h1>
      <h1>{count}</h1>
      <h1>Leetcode Realtime Counter</h1>
    </>
  );
};
