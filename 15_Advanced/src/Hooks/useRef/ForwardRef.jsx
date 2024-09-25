/* eslint-disable react/prop-types */

import { forwardRef, useRef, useId } from "react";

export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* <BeforeReact19Input label="username" ref={username} />
      <BeforeReact19Input label="password" ref={password} /> */}

      <AfterReact19Input label="username" ref={username} />
      <button>Submit</button>
    </form>
  );
};

// Before React v19
// eslint-disable-next-line react/display-name
// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();

//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input ref={ref} />
//     </div>
//   );
// });


// After React19

const AfterReact19Input = (props) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input ref={props.ref} />
    </div>
  );
};
