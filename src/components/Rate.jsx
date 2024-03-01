import '../styles/sass/assets/css/rate.css'

function RateScale(props) {
  const scaleValue = props.scaleValue

  const range = [1, 2, 3, 4, 5]

  return (
    <div className='housing__rate'>
      {range.map((rangeElem) => (
        <i
          key={rangeElem.toString()}
          className={
            'fa-solid fa-star' + (scaleValue >= rangeElem ? '' : ' grey')
          }
        ></i>
      ))}
    </div>
  )
}

export default RateScale
