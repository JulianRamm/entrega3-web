import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/Navbar.css';
import LogOut from '../img/logout.svg';
import UserIcon from '../img/user.svg'

const Navbar = (props) => {

  const [user, setUser] = props.user;

  return (
    <section>
      <nav
        id="navigation-bar"
        className
        ="navbar navbar-expand-xl navbar-light bg-light fixed-top"
      >
        <Link to='/' id="navbar-brand" className="navbar-brand ml-5">DONARTE</Link>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-5 mr-5" id="nav-menu">
            <li><Link smooth className="nav-link" to="/#Us">Nosotros</Link></li>
            <li><Link smooth className="nav-link" to="/#Who">A quién ayudamos</Link></li>
            <li><Link smooth className="nav-link" to="/#Testimonies">Testimonios</Link></li>
            <li><Link to='/report' className="nav-link" >Reporta a personas</Link></li>
          </ul>
        </div>
        <div className="ml-7 mr-7">
          <span className={!user || !user.email ? '' : 'd-none'}>
            <Link to='/Donate' id="donarNav" className="btn btn-dark ml-2 mr-2" >Donar</Link>
            <Link to='/login' className='btn btn-outline-dark ml-2 mr-2 bold' >Ingresar</Link>
            <Link to='/register' className='btn btn-outline-dark ml-2 mr-2 bold' >Registro</Link>
          </span>
          <span className={user && user.email ? 'ml-3 user-name' : 'd-none'}>
            {user.nombre}
          </span>
          <span className={user && user.email ? 'ml-3' : 'd-none'}>
            <img src={LogOut} alt='Ícono de logout'
              className='logout-icon'
              onClick={() => {
                setUser({})
              }} />
          </span>
        </div>
      </nav>

    </section>

  )
}

export default Navbar
