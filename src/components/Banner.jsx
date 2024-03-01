import '../styles/assets/css/style.css'
import '../styles/sass/assets/css/banner.css'

function Banner({ image, texteOne, texteTwo }) {
  return (
    <div className='banner'>
      <div className='banner__text-container'>
        <h1 className='banner__text'>{texteOne}</h1>
        <h1 className='banner__text'>{texteTwo}</h1>
      </div>
      <img
        className='banner__img'
        src={image}
        alt="Bannière page d'accueil Kasa"
      />
    </div>
  )
}

export default Banner
