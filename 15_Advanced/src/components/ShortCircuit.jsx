
import { useState } from "react";
const ShortCircuitExample = () => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");
  return (
    <section>
      <h1>Welcome to the ShortCircuit Evaluation</h1>

      {isLoggedIn && <p>You are logged in!...</p>}

      {user ? `Hello ${user}` : "Plz log in!..."}

      <div>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button onClick={() => setUser("Sejal Gupta")}>Set User</button>
        <button onClick={() => setUser("")}>Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuitExample;
