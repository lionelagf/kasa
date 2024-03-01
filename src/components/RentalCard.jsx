import '../styles/sass/assets/css/rental-card.css'

function RentalCard({ cover, title }) {
  return (
    <article className='rental__card'>
      <img className='rental__card-img' src={cover} alt={title} />
      <span className='rental__card-text'>{title}</span>
    </article>
  )
}

export default RentalCard
