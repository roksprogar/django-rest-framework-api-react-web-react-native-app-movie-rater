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

  const movieClicked = movie => {
    setSelectedMovie(movie)
  }

  const updateMovie = (movie) => setSelectedMovie(movie)

  const editClicked = (movie) => {
    setEditedMovie(movie)
 }

  const deleteClicked = (movie) => {
    console.log(movie)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className='layout'>
        <MovieList movies={movies} movieClicked={movieClicked} editClicked={editClicked} deleteClicked={deleteClicked} />
        <MovieDetails updateMovie={updateMovie} movie={selectedMovie} />
        <MovieEdit editedMovie={editedMovie} />
      </div>
    </div>
  );
}

export default App;
