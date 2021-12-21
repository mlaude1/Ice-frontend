import React from 'react'
import { Link, useParams } from "react-router-dom"

const SingleIce = ({ ices, edit, deleteIce }) => {
  const params = useParams()
  const id = parseInt(params.id)
  
  const ice = ices.find((i) => i.id === id)

  const img = {
    height: "400px",
    width: "400px"
  }

  return (
    <div>
      <h1>{ice?.name}</h1>
      <img style={img} src={ice?.image} />
      <h2>{ice?.caption}</h2>
      <h3>{ice?.description}</h3>
      <h3>{ice?.ingredients}</h3>
      <Link to="/">
        <button>Go back</button>
      </Link>
      <button onClick={() => edit(ice)}>Edit</button>
      <button onClick={() => deleteIce(ice)}>Delete</button>
    </div>
  )
}

export default SingleIce
