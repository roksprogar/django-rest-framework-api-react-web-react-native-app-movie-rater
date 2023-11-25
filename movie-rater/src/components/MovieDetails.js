import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function MovieDetails(props) {

    const movie = props.movie

  return (
    <div>
    { movie ? (
        <>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 0 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 1 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 2 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 3 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 4 ? 'orange' : ''}/>
            ({movie.number_of_ratings})
        </>
    ): null}
    </div>
  )
}

export default MovieDetails