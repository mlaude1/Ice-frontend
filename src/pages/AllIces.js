import React from 'react'
import Ice from '../components/ice'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'

const AllIces = (props) => {
  return (
    <section>
      
      <section class="section">
        <div class="container">
          <ImageSlider slides={SliderData} />
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <h1 className='title has-text-centered is-size-1 is-underlined notification'>All Flavors</h1>
        </div>
      </section>

      <div className='ices-container'>
      {props.ices.map((ice) => {
        return <Ice key={ice.id} ice={ice} />
        })}
      </div>
    </section>
  )
}

export default AllIces
