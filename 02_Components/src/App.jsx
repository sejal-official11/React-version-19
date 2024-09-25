export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      
    </>
  );
};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img
          src="../public/Untitled-design-2024-02-23T232344.805.png"
          alt="805.jpg"
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: Queen Of Tears</h2>
      <h3>Rating: 8.2</h3>
      <p>
        Summary: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        quisquam expedita nam minima rerum ut mollitia quasi corrupti harum
        voluptates?
      </p>
    </div>
  );
};
