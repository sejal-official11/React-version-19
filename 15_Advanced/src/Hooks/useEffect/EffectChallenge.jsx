import { useEffect, useState } from "react";

export const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <div>
        <h1>useEffect Challenge</h1>
        <p>
          Count : <span>{count}</span>{" "}
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>
          Name: <span style={{color: "yellowgreen"}}>{name}</span>
        </p>

        <input type="text" value={name} onChange={handleInput}
        style={{color: "orange"}} />
      </div>
    </>
  );
};
