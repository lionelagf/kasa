import '../styles/sass/assets/css/header.css'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

function getClassName({ isActive }) {
  if (isActive) {
    return 'active'
  }
}

function Header() {
  return (
    <div className='header'>
      <Logo />
      <nav className='header__navbar'>
        <NavLink to='/' className='{getClassName} header__navlink'>
          Accueil
        </NavLink>
        <NavLink to='/a-propos' className={getClassName}>
          A propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
