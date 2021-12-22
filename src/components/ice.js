import React from 'react'
import { Link } from 'react-router-dom'


const Ice = ({ ice }) => {
  const img = {
    height: "400px",
    width: "400px"
  }
  
  
  return (
    <div className='ice'>
      <Link to={`/ice/${ice.id}`}>
        
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img style={img} src={ice.image} />
            </figure>
          </div>
          <div class="card-content">

            <div class="content">
              <h1 className='title has-text-danger has-text-centered is-size-4'>{ice.name}</h1>
            </div>
          </div>
        </div>
        
        
        


      </Link>
    </div>
  )
}

export default Ice
