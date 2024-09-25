import { useState } from "react";

// const users = [
//   { name: "Sejal", age: 23 },
//   { name: "Sittu", age: 17 },
//   { name: "Mummy", age: 48 },
//   { name: "Papa", age: 50 },
// ];

export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Sejal", age: 23 },
        { name: "Sittu", age: 17 },
        { name: "Mummy", age: 48 },
        { name: "Papa", age: 50 },
      ])

  return (
    <div className="main-di">
      <h1>Users List</h1>
      <ul>
        {users.map((currElem, index) => {
          return (
            <>
              <li key={index}>
                {currElem.name} - {currElem.age} year old
              </li>
            </>
          ); 
        })}
      </ul>
    </div>
  );
};
