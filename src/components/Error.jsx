import { Link } from 'react-router-dom'
import '../styles/sass/assets/css/error.css'

function Error() {
  return (
    <div className='error'>
      <h1 className='error__title color'>404</h1>
      <h3 className='error__subtitle color'>
        Oups! La page que vous demandez n'existe pas.
      </h3>
      <Link to='/'>
        <span className='error__back-button'>
          Retourner sur la page d'accueil
        </span>
      </Link>
    </div>
  )
}

export default Error
