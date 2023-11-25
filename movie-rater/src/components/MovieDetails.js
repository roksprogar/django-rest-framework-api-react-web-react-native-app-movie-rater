import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function MovieDetails(props) {
    const [highlighted, setHighlighted] = useState(0)

    const movie = props.movie

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
                      onMouseEnter={setHighlighted(i)}
                      onMouseLeave={setHighlighted(0)}
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