import { useEffect, useState } from "react"
import { API } from "../api-service"
import { useCookies } from "react-cookie"

function MovieEdit(props) {
  const [title, setTitle] = useState(props.editedMovie.title)
  const [description, setDescription] = useState(props.editedMovie.description)
  const [token] = useCookies(['mr-token'])

  useEffect(() => {
    setTitle(props.editedMovie.title)
    setDescription(props.editedMovie.description)
  }, [props.editedMovie])

  const updateClicked = () => {
    API.updateMovie(props.editedMovie.id, {title, description}, token['mr-token'])
    .then(response => props.updatedMovie(response))
    .catch(error => console.log(error))
  }

  const createClicked = () => {
    API.createMovie({title, description}, token['mr-token'])
    .then(response => props.movieCreated(response))
    .catch(error => console.log(error))
  }

  const isDisabled = title.length === 0 || description.length === 0

  return (
    <>
      { props.editedMovie ? (
        <>
          <label htmlFor="title">Title</label><br/>
          <input
            id="title"
            type="text"
            placeholder="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          /><br/>
          <label htmlFor="description">Description</label><br/>
          <textarea
            id="description"
            type="text"
            placeholder="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          { props.editedMovie.id ?
            <button onClick={updateClicked} disabled={isDisabled}>Update</button> :
            <button onClick={createClicked} disabled={isDisabled}>Create</button>
          }
        </>
      ) : null}
    </>
  )
}

export default MovieEdit