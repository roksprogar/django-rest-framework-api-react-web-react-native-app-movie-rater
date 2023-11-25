import { useState } from "react"

function MovieEdit(props) {
  const [title, setTitle] = useState(props.editedMovie.title)
  const [description, setDescription] = useState(props.editedMovie.description)

  const updateClicked = () => {
    console.log("update here")
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