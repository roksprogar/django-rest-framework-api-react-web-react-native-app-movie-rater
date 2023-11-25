function MovieDetails(props) {
  return (
    <div>
    { props.movie ? (
        <>
            <h1>{props.movie.title}</h1>
            <p>{props.movie.description}</p>
        </>
    ): null}
    </div>
  )
}

export default MovieDetails