import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const  moviesData = useLoaderData();
    console.log(moviesData);
    return(
       <>
       <ul className="container grid grid-four--cols">
       {moviesData && moviesData.Search.map((currMovie) => {
        return <Card key={currMovie.imdbID} currMovie={currMovie} />
       })}
       </ul>
       </>
    )

}