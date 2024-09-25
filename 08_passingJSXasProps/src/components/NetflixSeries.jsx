import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./seriesCard";

export const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((currentElement) => (
      <SeriesCard key = {currentElement.id} data= {currentElement} />
      ))}    
    </ul>
  );
};

export default NetflixSeries;
