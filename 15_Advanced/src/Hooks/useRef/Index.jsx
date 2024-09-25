import { useRef } from "react";

export const UseRef = () => {
  // hum data ee bhi get kar sakte hain

  //   const username = console.log(document.getElementById("username"));
  //    const password = console.log(document.getElementById("password"));

  const username = useRef(null);
  const password = useRef(null);

  console.log(username);
  console.log(password);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current, password.current);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="username" ref={username} />
      <br />
      <input type="text" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};
