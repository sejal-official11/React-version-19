import { useReducer } from "react";

export const ReducerComp = () => {
  const initialState = {
    
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if (action.type === "RESET") {
    //   return (state = 0);
    // }

    switch (action.type) {
      case "INCREMENT":
        // return state + 1;
        return {
            ...state,
            count : state.count + state.inc}

      case "DECREMENT":
        // return state - 1;
        return {count : state.count - state.dec}

      case "RESET":
        // return (state = 0);
        return {count : 0}

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(useReducer(reducer, 0));

  return (
    <div className="p-4 h-lvh flex flex-col justify-center items-center">
      
      {/* <h1>{state}</h1> */}
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};
