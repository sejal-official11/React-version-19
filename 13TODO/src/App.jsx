import { useState } from "react";
import "./App.css";
import { Todo } from "./TODO/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        {<Todo />}
      </section>
    </>
  );
}

export default App;
