import React, { useEffect } from 'react'

const Nosotros = () => {
  
  useEffect(() => {

    const clickear = () => {
      console.log("click")
    }

   window.addEventListener("click", clickear)
   

   return () => {
    window.removeEventListener("click", clickear)
    

   }



  },[])
  
  
  
  
  
  return (
    <div className='container'>
      <h1 className='sobrenosotros'>Nosotros</h1>
     
     
     
     <p className='sobrenosotros' >LIWOR ES UN EMPRENDIMIENTO QUE ARRANCÓ A PRINCIPIOS DEL 2016</p>


     <p className='sobrenosotros'>NUESTRA VISIÓN:
         SER LÍDERES Y RECONOCIDOS EN MODA URBANA, HACIENDO LLEGAR NUESTROS PRODUCTOS A TODOS LOS RINCONES DEL PAÍS.</p>

    <p className='sobrenosotros' >MISIÓN:
       OFRECER UNA GRAN VARIEDAD DE PRODUCTOS A UN PRECIO ACCESIBLE, BRINDANDO UNA CÁLIDA, EXCELENTE Y EFICIENTE ATENCIÓN AL CLIENTE; PREDISPUESTOS A ESCUCHARLOS Y A MEJORAR EN TODO SENTIDO</p>

    <p className='sobrenosotros'>NUESTRO EQUIPO DE TRABAJO SE RIGE POR VALORES HUMANOS QUE SON LOS QUE QUEREMOS TRANSMITIRLES A USTEDES, DE NUESTRO LADO SIEMPRE VAN A ENCONTRAR SEGURIDAD, HONESTIDAD Y EFICACIA</p>



     
    </div>
  )
}

export default Nosotros;
