import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieList(props) {
  const movieClicked = movie => {
    props.movieClicked(movie)
  }

  const editClicked = (movie) => {
    props.editClicked(movie)
  }

  const deleteClicked = (movie) => {
    props.deleteClicked(movie)
  }

  return (
    <div>
    { props.movies && props.movies.map( movie => {
      return (
        <div key={movie.id}>
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
