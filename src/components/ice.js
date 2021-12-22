import React from 'react'
import { Link } from 'react-router-dom'


const Ice = ({ ice }) => {
  const img = {
    height: "400px",
    width: "400px"
  }
  
  
  return (
    <div>
      <Link to={`/ice/${ice.id}`}>
        <img style={img} src={ice.image} />
        <h1>{ice.name}</h1>
      </Link>
    </div>
  )
}

export default Ice
