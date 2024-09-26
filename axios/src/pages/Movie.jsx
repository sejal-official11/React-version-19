// import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";
import { getMovie } from "../services/GetService";

export const Movie = () => {
  const [data, setData] = useState([]);

  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=d01287ae&s=titanic&page=1";

  const getMovieData = async () => {
    try {
      // automatic json Transformation
    //   const res = await axios.get(API);
    const res = await getMovie()
      console.log(res.data.Search);
      // console.log(res.data.totalResults)
      setData(res.data.Search);
    } catch (error) {
      console.log("Error message: ", error.message);
      console.log("Error status: ", error.response.status);
      console.log("Error data: ", error.response.data);
    }
  };

  // <h1> Axios</h1>

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul>
      {data.map((currEle) => {
        return <Card key={currEle.imdbID} movieData={currEle} />;
      })}
    </ul>
  );
};
