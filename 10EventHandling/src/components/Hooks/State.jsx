// import React from 'react'
import { useState } from "react";

export const State = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Component");
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  // console.log(`count is ${count}`)
  // const handleNewButtonClick = () => {
  // }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increament</button>
        <br />
        {/* <button onClick={handleNewButtonClick}>Increament 2</button> */}
        <ChildComp count={count} />
      </div>
      <Sibling count={count} />
    </>
  );
};

function ChildComp({ count }) {
  console.log("Child component rendered");
  return (
    <div className="main-div ">
      <h2>Child Component - {count}</h2>
    </div>
  );
}

export function Sibling({ count }) {
  console.log("Sibling component rendered");
  return (
    <div className="main-div ">
      <h2>Sibling Component - {count}</h2>
    </div>
  );
}
