
export const SeriesCard = (props) => {
    return (
        <li>
          <div>
            <img
              // eslint-disable-next-line react/prop-types
              src={props.currentElement.img_url}
              alt="123"
              width="40%"
              height="40%"
            />
          </div>
          <h2>Name: {props.currentElement.name}</h2>
          <h3>Rating: {props.currentElement.rating}</h3>
          <p>Summary : {props.currentElement.description}</p>
          <p>Genre: {props.currentElement.genre}</p>
          <p>Cast: {props.currentElement.cast}</p>
          <a href={props.currentElement.watch_url} target="_blank" rel="">
            <button>Watch Now</button>
          </a>
        </li>
      );
};