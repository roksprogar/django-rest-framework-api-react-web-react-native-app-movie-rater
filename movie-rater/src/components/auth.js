import { useState } from "react"
import { API } from "../api-service"

function Auth(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginClicked = () => {
    API.loginUser({username, password})
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <>
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
            <button onClick={loginClicked}>Login</button>
          </div>
      </>
  )
}

export default Auth