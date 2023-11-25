import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieEdit from './components/MovieEdit';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useFetch } from "./hooks/useFetch";
function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [editedMovie, setEditedMovie] = useState(null)
  const [token, , deleteToken] = useCookies(['mr-token'])
  const [data, loading, error] = useFetch()

  useEffect(() => {
    setMovies(data)
  }, [data])

  useEffect(() => {
    if (!token["mr-token"]) window.location.href = '/'  
  }, [token])

  const loadMovie = (movie) => {
    setSelectedMovie(movie)
    setEditedMovie(null)
  }

  const editClicked = (movie) => {
    setEditedMovie(movie)
    setSelectedMovie(null)
 }

 const updatedMovie = (movie) => {
  const newMovies = movies.map(mov => {
    if (movie.id === mov.id) {
      return movie
    }
    return mov
   })
   setMovies(newMovies)
  }

  const newMovie = () => {
    setEditedMovie({title: '', description: ''})
    setSelectedMovie(null)
  }

  const deleteClicked = movie => {
      const newMovies = movies.filter( mov => mov.id !== movie.id )
      setMovies(newMovies)
  }

  const movieCreated = newMovie => {
    setMovies([...movies, newMovie])
  }

  const logoutUser = () => {
    deleteToken('mr-token')
  }

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...</h1>
  return (
    <div className="App">
      <header className="App-header">
        <h1><FontAwesomeIcon icon={faFilm}/>Movie rater</h1>
      </header>
      <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser}/>
      <div className='layout'>
        <div>
          <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked} deleteClicked={deleteClicked} />
          <button onClick={newMovie}>New movie</button>
        </div>
        <MovieDetails updateMovie={loadMovie} movie={selectedMovie} />
        { editedMovie ?
        <MovieEdit editedMovie={editedMovie} updatedMovie={updatedMovie} movieCreated={movieCreated} />
        : null }
      </div>
    </div>
  );
}

export default App;
