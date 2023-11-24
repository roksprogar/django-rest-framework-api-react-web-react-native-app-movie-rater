import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className='layout'>
        <div>
          { movies.map( movie => {
            return <h2>{movie}</h2>
          })}
        </div>
        <div>Movie details</div>
      </div>
    </div>
  );
}

export default App;
