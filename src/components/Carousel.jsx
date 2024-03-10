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
      <span className='carousel__number'>
        {showImg + 1}/{image.length}
      </span>
      <img className='carousel__img' src={image[showImg]} alt={title} />
      {image.length > 1 && ( //Si le nombre d'image est supérieur à 1, alors les chevrons sont visible.
        <div className='carousel__arrow-container'>
          <button onClick={arrowLeft} className='carousel__arrow'>
            <i className='fa-solid fa-chevron-left '></i>
          </button>
          <button onClick={arrowRight} className='carousel__arrow'>
            <i className='fa-solid fa-chevron-right '></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default Carousel
