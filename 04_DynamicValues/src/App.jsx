import React from "react";

export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };
  let age = 18;
  // let canWatch = "Not Available";

  // if (age >= 18) {
  //   canWatch = "Watch Now";
  // }

  const canWatch = () => {
    if(age >= 18) {
      return "Watch Now"
    }
    return "Not Available"
  }

  return (
    <>
      <div>
        <div>
          <img
            src="../public/Untitled-design-2024-02-23T232344.805.png"
            alt="123"
            width="40%"
            height="40%"
          />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {5 + 4}</h3>
        <p>Genre: {returnGenre()}</p>
        {/* <button> {age >= 18 ? "Watch Now" : "Not Available"}</button> */}
        {/* <button>{canWatch}</button> */}
        <button>{canWatch()}</button>
      </div>
    </>
  );
};
