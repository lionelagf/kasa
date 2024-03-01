import '../styles/sass/assets/css/carousel.css'
import React, { useState } from 'react'

function Carousel({ image, title }) {
  let [showImg, changeImage] = useState(0)

  function arrowRight() {
    changeImage(showImg + 1)
    if (showImg === image.length - 1) changeImage(0)
  }

  function arrowLeft() {
    changeImage(showImg - 1)
    if (showImg === 0) changeImage(image.length - 1)
  }

  console.log(showImg)
  return (
    <div className='carousel'>
      <img className='carousel__img' src={image[showImg]} alt={title} />
      <div className='carousel__arrow-container'>
        <button onClick={arrowLeft} className='carousel__arrow'>
          <i className='fa-solid fa-chevron-left '></i>
        </button>
        <button onClick={arrowRight} className='carousel__arrow'>
          <i className='fa-solid fa-chevron-right '></i>
        </button>
      </div>
    </div>
  )
}

export default Carousel
