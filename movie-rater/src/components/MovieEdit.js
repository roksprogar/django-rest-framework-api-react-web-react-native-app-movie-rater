function MovieEdit(props) {
  return (
    <>
      { props.editedMovie ? (
        <h1>{props.editedMovie && props.editedMovie.title}</h1>
      ) : null} 
    </>
  )
}

export default MovieEdit