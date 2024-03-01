import '../styles/sass/assets/css/rental-section.css'
import RentalCard from './RentalCard'
import Logements from '../logements'
import { Link } from 'react-router-dom'

function RentalSection() {
  return (
    <section className='rental-section'>
      {Logements.map((logement) => (
        <div key={logement.id}>
          <Link to={`/logement/${logement.id}`}>
            <RentalCard title={logement.title} cover={logement.cover} />
          </Link>
        </div>
       
      ))}
   
    </section>
  )
}

export default RentalSection
