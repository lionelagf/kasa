import '../styles/assets/css/style.css'

function Banner({ image, texte }) {
	return (
	<div className="banner">
		
		<span className='banner__text'>{texte}</span>
		
		<img className="banner__img" src={image} alt="Bannière page d'accueil Kasa"/>
	</div>	
	)
}

export default Banner
