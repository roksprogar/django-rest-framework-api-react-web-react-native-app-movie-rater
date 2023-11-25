import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieEdit from './components/MovieEdit';

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [editedMovie, setEditedMovie] = useState(null)

  useEffect(() => {
    fetch('http://0.0.0.0:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 42c3f93e53684418e372619c503ace234a56685f',
      }
    })
    .then(response => response.json())
    .then(response => setMovies(response))
    .catch(error => console.log(error))
  }, [])

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
    console.log(movie)
}

const movieCreated = newMovie => {
  setMovies([...movies, newMovie])
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
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
