import { useEffect, useState } from "react"
import { API } from "../api-service"
import { useCookies } from "react-cookie"

function Auth(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginView, setIsLoginView] = useState(true)
  const [token, setToken] = useCookies(['mr-token'])

  useEffect(() => {
    if (token["mr-token"]) window.location.href = '/movies'
  }, [token])

  const loginClicked = () => {
    API.loginUser({username, password})
    .then(response => setToken('mr-token', response.token))
    .catch(error => console.log(error))
  }

  const signupClicked = () => {
    API.signupUser({username, password})
    .then(response => loginClicked())
    .catch(error => console.log(error))
  }

  const isDisabled = username.length === 0 || password.length === 0

  return (
    <div className="App">
      <header className="App-header">
        <h1>{isLoginView ? 'Log In': 'Sign Up'}</h1>
      </header>
      <div className="login-container">
        <label htmlFor="username">Username</label><br/>
        <input
          id="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        /><br/>
        <label htmlFor="password">Password</label><br/>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div>
          { isLoginView ?
            <button onClick={loginClicked} disabled={isDisabled}>Log In</button> :
            <button onClick={signupClicked} disabled={isDisabled}>Sign Up</button>
          }
        </div>
        { isLoginView ?
          <p onClick={() => setIsLoginView(false)}>You don't have an account? Sign up here!</p> :
          <p onClick={() => setIsLoginView(true)}>You already have an account? Log in here!</p>
        }
      </div>
    </div>
  )
}

export default Auth