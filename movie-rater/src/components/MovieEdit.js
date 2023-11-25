import { useState } from "react"
import { API } from "../api-service"

function MovieEdit(props) {
  const [title, setTitle] = useState(props.editedMovie.title)
  const [description, setDescription] = useState(props.editedMovie.description)

  const updateClicked = () => {
    API.updateMovie(props.editedMovie.id, {title, description})
    .then(response => props.updatedMovie(response))
    .catch(error => console.log(error))
  }

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
          <button onClick={updateClicked}>Update</button>
        </>
      ) : null}
    </>
  )
}

export default MovieEdit