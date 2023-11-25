function MovieEdit(props) {
    return (
        <h1>{props.editedMovie && props.editedMovie.title}</h1>
    )
}

export default MovieEdit