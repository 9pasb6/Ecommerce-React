import React from 'react'
import CartWidged from '../CartWidged/CartWidged'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../../assets/logoGuca.png'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
   <>
 <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  
     <Link className='navbar-brand' to={"/"}>
     <img  src={logo} alt="Logo" width="80" height="80" className="d-inline-block align-text-top"/>  
     </Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li >
          <Link to={"/"} className="nav-item">Home </Link>
        </li>
        <li >
          <NavLink  to={`/category/cafe`} className="nav-item" >Café molido</NavLink>
        </li>
        <li >
        <NavLink to={`/category/productos`} className="nav-item" >Productos con café</NavLink>
        </li>
       
      </ul>

      {/* Estilo para ocultar el formulario en dispositivos móviles */}
      <form className="d-none d-lg-flex d-xl-flex d-xxl-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>

      <div className='p-3'>
        <CartWidged/>
      </div>
    </div>
  </div>
</nav>



    


   </>
  )
}

export default NavBar