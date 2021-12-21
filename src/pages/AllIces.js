import React from 'react'
import Ice from '../components/ice'

const AllIces = (props) => {
  return props.ices.map((ice) => {
    return <Ice key={ice.id} ice={ice} />
  })
}

export default AllIces
