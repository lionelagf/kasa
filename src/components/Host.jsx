import '../styles/sass/assets/css/host.css'

function Host({ name, picture }) {
  return (
    <div className='housing__host-container'>
      <span className='housing__host'>{name}</span>
      <img className='housing__host-img' src={picture} alt={name} />
    </div>
  )
}

export default Host
