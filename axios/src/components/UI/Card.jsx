

// eslint-disable-next-line react/prop-types
export const Card = ({movieData}) => {
    // eslint-disable-next-line react/prop-types
    const {Poster, imdbId} = movieData
    return(
        <li>
        <div>
            <div>
                <img src={Poster} alt={imdbId} />
            </div>
            <div>
                <div>
                    <a href={`/movie/${imdbId}`}>
                    <button>Watch now</button>
                    </a>
                </div>
            </div>
        </div>
    </li>

    )
}