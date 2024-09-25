import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./seriesCard";

export const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currentElement) => (
        <SeriesCard key={currentElement.id} currentElement={currentElement} />
      ))}
    </ul>
  );
};

export default NetflixSeries;
