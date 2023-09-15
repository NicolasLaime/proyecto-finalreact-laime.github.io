import React from 'react'
import { useForm } from 'react-hook-form'

const Contacto = () => {

  const {register, handleSubmit} = useForm();
  

  const enviar = (data) => {
    console.log(data)
  }






  return (
    <div className='container'>

        <div className="main-title">Contacto</div>

        <form className="formulario" onSubmit={handleSubmit(enviar)} >
            < input type="text" placeholder='ingresa nombre y apellido' {...register("nombre")}/>
            
            
            
            <input type="email" placeholder='ingresa tu email' {...register("email")} />
            
            
            <button className='enviar' type='submit'>Enviar</button>

        </form>





    </div>
  )
}

export default Contacto
