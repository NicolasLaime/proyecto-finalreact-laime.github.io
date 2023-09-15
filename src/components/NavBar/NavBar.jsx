import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import imagenlogo from "../imagenes/logo liwor.png"


const NavBar = () => {
    return (
      <div>
        <nav className='navbar'>
          <Link to="/" className='logo'><img src={imagenlogo} /></Link>
  
  
          <ul className='menu'>
              <li><Link className='menu-link' to="/productos">Productos</Link></li>
              <li><Link className='menu-link' to="/productos/buzos">Buzos</Link></li>
              <li><Link className='menu-link' to="/productos/remeras">Remeras</Link></li>
              <li><Link className='menu-link' to="/productos/pantalones">Pantalones</Link></li>
              <li><Link className='menu-link' to="/Nosotros">Nosotros</Link></li>
              <li><Link className='menu-link' to="/Contacto">Contacto</Link></li>
              <li><CartWidget/></li>


  
          </ul>
        </nav>
      </div>
    )
  }
  
  export default NavBar