import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function MovieDetails(props) {
    const [highlighted, setHighlighted] = useState(-1)

    const movie = props.movie

    const rateClicked = rating => {
      fetch(`http://0.0.0.0:8000/api/movies/${movie.id}/rate_movie/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 42c3f93e53684418e372619c503ace234a56685f',
        },
        body: JSON.stringify({
          stars: rating
        })
      })
      .then(() => getMovieDetails())
      .catch(error => console.log(error))
    }

    const getMovieDetails = () => {
      fetch(`http://0.0.0.0:8000/api/movies/${movie.id}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 42c3f93e53684418e372619c503ace234a56685f',
        }
      })
      .then(response => response.json())
      .then(response => props.updateMovie(response))
      .catch(error => console.log(error))
    }

  return (
    <div>
    { movie ? (
        <>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 1 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 2 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 3 ? 'orange' : ''}/>
            <FontAwesomeIcon icon={faStar} className={movie.average_rating > 4 ? 'orange' : ''}/>
            ({movie.number_of_ratings})
            <div className="rate-container">
              <h2>Rate it</h2>
              {
                [...Array(5)].map((e, i) => {
                  return (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={highlighted >= i ? 'purple' : ''}
                      onMouseEnter={() => setHighlighted(i)}
                      onMouseLeave={() => setHighlighted(-1)}
                      onClick={() => rateClicked(i)}
                    />
                  )
                })
              }
            </div>
        </>
    ): null}
    </div>
  )
}

export default MovieDetails