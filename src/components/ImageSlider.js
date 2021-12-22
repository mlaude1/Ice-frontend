import React, { useState } from 'react'
import { SliderData } from './SliderData';
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { BsFillArrowRightSquareFill } from "react-icons/bs"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section>
      <BsFillArrowLeftSquareFill  id="left-arrow" onClick={prevSlide} />
      <BsFillArrowRightSquareFill id="right-arrow" onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
          <div 
          className={index === current ? "slide active" : "slide"}
          key={index}
          >
            {index === current && (
            <img src={slide.image} alt="carousel image" className="image" />
            )}
          </div>
        )
      })}
    </section>
  )
};

export default ImageSlider
