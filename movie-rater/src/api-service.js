const TOKEN = '42c3f93e53684418e372619c503ace234a56685f'

export class API {
    static createMovie(body) {
        return fetch('http://0.0.0.0:8000/api/movies/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`,
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static updateMovie(movie_id, body) {
        return fetch(`http://0.0.0.0:8000/api/movies/${movie_id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`,
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static deleteMovie(movie_id) {
        return fetch(`http://0.0.0.0:8000/api/movies/${movie_id}/`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`,
            }
        })
    }
}