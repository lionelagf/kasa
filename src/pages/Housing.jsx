import '../styles/sass/assets/css/housing.css'
import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import RateScale from '../components/Rate'
import Host from '../components/Host'
import Error from '../components/Error'
import logements from '../logements'
import { useParams } from 'react-router-dom'

function Housing() {
  const param = useParams()
  const housingId = param.id
  const housing = logements.find((logement) => {
    return logement.id === housingId
  })
  if (housing === undefined) {
    return <Error />
  }

  const equipments = housing?.equipments.map((equipment, i) => {
    return (
      <div key={i}>
        <span>{equipment}</span>
      </div>
    )
  })

  return (
    <section>
      <div>
        <Carousel image={housing.pictures}/>
      </div>
      <div className='housing'>
        <div className='housing__container-one'>
          <h1 className='housing__title'>{housing.title}</h1>
          <h2 className='housing__location'>{housing.location}</h2>
          <div className='housing__tags-container'>
            {housing?.tags.map((tags, i) => {
              return <Tag key={i} tag={tags} />
            })}
          </div>
        </div>
        <div className='housing__container-two'>
          <Host name={housing.host.name} picture={housing.host.picture} />
          <RateScale scaleValue={housing.rating} />
        </div>
      </div>
      <div className='housing__collapse'>
        <Collapse title='Description' description={housing.description} />
        <Collapse title='Équipements' description={equipments} />
      </div>
    </section>
  )
}

export default Housing
