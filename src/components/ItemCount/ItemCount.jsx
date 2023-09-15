import React, { useState } from 'react'
import Item from '../Item/Item'


   const ItemCount = ({cantidad, handlerSumar, handlerRestar, handlerAgregar} ) => {

   
   
   


  
  
  
    return (
    <div>
         <div className="item-count">
             
             <button onClick={handlerRestar}>-</button>
             <p>{cantidad}</p>
             <button onClick={handlerSumar}>+</button>

         </div>

          <button className='agregar-al-carrito' onClick={handlerAgregar}>Agregar Al carrito</button>

    </div>
  )
}

export default ItemCount
