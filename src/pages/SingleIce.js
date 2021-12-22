import React from 'react'
import { Link, useParams } from "react-router-dom"

const SingleIce = ({ ices, edit, deleteIce }) => {
  const params = useParams()
  const id = parseInt(params.id)
  
  const ice = ices.find((i) => i.id === id)

  return (
    <div className='single-ice has-background-white'>
      <section class="section">
        <div class="container">
          <h1 className='title has-text-centered notification has-text-danger is-size-2'>{ice?.name}</h1>
          <div class="columns box">
            <div class="column is-two-thirds">
              <img src={ice?.image} />
            </div>
            <div class="column notification is-one-third">
              <div className='block'>
                <h2 class="has-text-danger is-size-4 has-text-weight-semibold">{ice?.caption}</h2>
              </div>
              <div className='block'>
                <h3 className='is-size-5'>{ice?.description}</h3>
              </div>
              <div className='block'>
                <h3 className='it-size-5 has-text-black'><em>Ingredients: {ice?.ingredients}</em></h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container has-text-centered">
          <Link to="/">
            <button className='button is-info' >Go back</button>
          </Link>
          <button className='button is-warning mx-6' onClick={() => edit(ice)}>Edit</button>
          <button class="button is-danger is-outlined" onClick={() => deleteIce(ice)}>
            <span>Delete</span>
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
          </button>

        </div>
      </section>
      
    </div>
  )
}

export default SingleIce
