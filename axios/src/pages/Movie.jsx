import axios from "axios";
import { useEffect } from "react";


export const Movie = () => {
    
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=d01287ae&s=titanic&page=1"

    const getMovieData = async () => {
        try {
            const res = await axios.get(API)
            console.log(res)
        }
        catch(error) {
            console.log(error)
        }
    }

 

   useEffect(() => {
    getMovieData();
   }, [])

}