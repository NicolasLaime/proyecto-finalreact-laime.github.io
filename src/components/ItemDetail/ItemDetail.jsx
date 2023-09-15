import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../Context/CartContext'

const ItemDetail = ({item}) => {
  
  
   const {carrito, agregarAlCarrito} = useContext(CartContext)
   console.log(carrito)






    const [cantidad, setCantidad] = useState(1)
    
    const handlerRestar = () => {
      cantidad > 1 && setCantidad (cantidad - 1) 
    }
  
  
    const handlerSumar = () => {
      cantidad < item.stock && setCantidad (cantidad + 1) 
    }
  
     
    





  
  
  
  return (
    <div className='container'> 
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
            <h3 className='titulo'>{item.titulo}</h3>
            <p className='descripcion'>{item.descripcion}</p>
            <p className='categoria'>categoria: {item.categoria}</p>
            <p className='precio'>${item.precio}</p>
            < ItemCount 
            cantidad={cantidad} 
            handlerRestar={handlerRestar} 
            handlerSumar={handlerSumar} 
            handlerAgregar={ () => {agregarAlCarrito(item, cantidad)} }
            />
        </div>
      </div>

    </div>
  )
}

export default ItemDetail
