import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function MovieDetails(props) {
  return (
    <div>
    { props.movie ? (
        <>
            <h1>{props.movie.title}</h1>
            <p>{props.movie.description}</p>
            <FontAwesomeIcon icon={faStar} />
        </>
    ): null}
    </div>
  )
}

export default MovieDetails