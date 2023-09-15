import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

   
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)


    const handlerVaciar = () => {
        vaciarCarrito();
    }



  return (
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>


      {
        carrito.map((prod) => (
            <div key={prod.id}>
             <h2>{prod.titulo}</h2>
             <p>precio unitario : ${prod.precio}</p>
             <p>precio total : ${prod.precio * prod.cantidad}</p>
             <p>cantitdad: {prod.cantidad}</p>
             
            </div>
        ))

        
      }

      {

         carrito.length > 0 ?
         <>
             
              <h2>precio total : ${precioTotal()}</h2>
              <button className='enviar' onClick={handlerVaciar}>Vaciar Carrito</button>
              <Link className='enviar' to="/Checkout">Finalizar Compra</Link>       
         
         </> :

         <h2> Tu carrito esta vacio </h2>

       }
      

    </div>
  )
}

export default Carrito
