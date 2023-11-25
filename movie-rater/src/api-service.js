export class API {
    static loginUser(body) {
        return fetch('http://0.0.0.0:8000/auth/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static signupUser(body) {
        return fetch('http://0.0.0.0:8000/api/users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static getMovies(token) {
        return fetch('http://0.0.0.0:8000/api/movies/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
        }
        })
        .then(response => response.json())
    }

    static createMovie(body, token) {
        return fetch('http://0.0.0.0:8000/api/movies/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static updateMovie(movie_id, body, token) {
        return fetch(`http://0.0.0.0:8000/api/movies/${movie_id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static deleteMovie(movie_id, token) {
        return fetch(`http://0.0.0.0:8000/api/movies/${movie_id}/`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
            }
        })
    }
}