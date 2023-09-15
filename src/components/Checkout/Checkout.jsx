import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const Checkout = () => {

   const [pedidoId, setPedidoId] = useState("")


   const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)


   const {register, handleSubmit} = useForm();

   const comprar = (data) => {
       const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()

       }

       console.log(pedido)

       const pedidosRef = collection(db,"pedidos");

       addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito();
            })
   
   
    }

    
    if(pedidoId) {
        return (
            <div className="container">
                <h1 className='main-title'>Muchas gracias por tu compra</h1>
                <p>tu numero de pedido es {pedidoId}</p>
            </div>
        )
    }



  
    return (
        
        <div className='container'>

        <div className="main-title">Contacto</div>

        <form className="formulario" onSubmit={handleSubmit(comprar)} >
            < input type="text" placeholder='ingresa nombre y apellido' {...register("nombre")}/>
            
            
            
            <input type="email" placeholder='ingresa tu email' {...register("email")} />

            <input type="text" placeholder='Direccion donde te lo enviaremos' {...register("direccion")} />

            
            
            <button className='enviar' type='submit'>Comprar</button>

        </form>





    </div>
  )
}

export default Checkout
