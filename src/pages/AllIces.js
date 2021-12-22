import React from 'react'
import Ice from '../components/ice'

const AllIces = (props) => {
  return (
    <section>
      <div className='ices-container'>
      {props.ices.map((ice) => {
        return <Ice key={ice.id} ice={ice} />
        })}
      </div>
    </section>
  )
}

export default AllIces
