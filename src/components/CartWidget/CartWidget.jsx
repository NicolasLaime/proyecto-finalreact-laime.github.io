import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'





const CartWidget = () => {
 
    const {cantidadEnCarrito} = useContext(CartContext)
 
 
 
 
 
 
    return (

    <div>
        <Link classname="menu-link" to="/carrito">
            Carrito
            <span className='Numerito'> {cantidadEnCarrito()}</span>
            </Link>
    </div>
  )
}

export default CartWidget
