import { useEffect, useState } from "react";

export const ReactuseEffect = () => {
    const [date, setDate] = useState(0)

  useEffect(() => {

    // setInterval(() => {
    //   const updateDate = new Date();
    //   setDate(updateDate.toLocaleTimeString())           
    // }, 1000)

  }, [date,]);
  

  return (

    <div>
      <h1> Hello, useEffect</h1>

      <p>Date: {date}</p>
      <button onClick={() => setDate(date + 1)}>Increament</button>
    </div>
  );
};

