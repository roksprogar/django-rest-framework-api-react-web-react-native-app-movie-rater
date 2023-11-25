import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function MovieList(props) {
  const [token] = useCookies(['mr-token'])
  
  const movieClicked = movie => {
    props.movieClicked(movie)
  }

  const editClicked = (movie) => {
    props.editClicked(movie)
  }

  const deleteClicked = (movie) => {
    API.deleteMovie(movie.id, token['mr-token'])
    .then(() => props.deleteClicked(movie))
    .catch(error => console.log(error))
  }

  return (
    <div>
    { props.movies && props.movies.map( movie => {
      return (
        <div key={movie.id} className="movie-item">
          <h2 onClick={event => movieClicked(movie)}>{movie.title}</h2>
          <FontAwesomeIcon
            icon={faEdit}
            className={movie.average_rating > 1 ? 'orange' : ''}
            onClick={() => editClicked(movie)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className={movie.average_rating > 1 ? 'orange' : ''}
            onClick={() => deleteClicked(movie)}
          />
        </div>
      )
    })}
  </div>
  )
}

export default MovieList;
