function MovieList(props) {
  const movieClicked = movie => {
    props.movieClicked(movie)
  }
  return (
    <div>
    { props.movies && props.movies.map( movie => {
      return (
        <div key={movie.id}>
          <h2 onClick={event => movieClicked(movie)}>{movie.title}</h2>
        </div>
      )
    })}
  </div>
  )
}

export default MovieList;
