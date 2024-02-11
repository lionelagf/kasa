import '../styles/assets/css/style.css'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Header() {
  return (
    <div className="header">
     <Logo />
      <nav className='header__navbar'>
        <Link to='/'>Accueil</Link>
        <Link to='/a-propos'>A propos</Link>
      </nav>
    </div>
  )
}

export default Header
