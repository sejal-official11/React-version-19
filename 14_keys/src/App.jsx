import { useState } from "react";
import "./App.css";
import { Keys } from "./TODO/Keys";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
       <Keys />
        
      </section>
    </>
  );
}

export default App;
