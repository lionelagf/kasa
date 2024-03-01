import logo from '../images/kasa_logo.png'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to='/'>
      <img src={logo} className='header__logo' alt='Logo Kasa' />
    </Link>
  )
}

export default Logo
