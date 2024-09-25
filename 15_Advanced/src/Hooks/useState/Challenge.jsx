import { useState } from "react";

export const CounterChallenge = () => {
  const [count, setCount] = useState(0);

  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    if (count < 100) setCount(count + step);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>useState Challenge</h1>
      <p>
        Count : <span>{count}</span>
      </p>

      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
