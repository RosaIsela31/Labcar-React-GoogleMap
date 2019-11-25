import React from 'react'
import { FaTimes } from "react-icons/fa";

import './style.css'

const Register = () => {
  return (
    <div className='container-principal-register'><br/>
       <div className='container-register'> <br/>
       <div className='container-iconx'>
         <FaTimes className='icon-x'/>
       </div> <br/>
       <div className='form-register'>
         <div className='question'>¿Ya tienes una cuenta?</div><br/>
         <p>O CREA UNA CUENTA NUEVA</p>
         <input type='text' placeholder='Nombre' className='name'/><br/>
         <input type='text' placeholder='Apellido' className='name'/><br/>
         <input type='text' placeholder='Correo' className='name'/><br/>
         <input type='text' placeholder='Teléfono' className='name'/><br/>
         <input type='text' placeholder='Contraseña' className='name'/><br/>
         <input type='text' placeholder='Ciudad' className='name'/> <br/><br/>
         <input type='submit' value='ENVIAR SOLICITUD' className='send'/>
       
       </div>

       </div>
      
    </div>
  )
}

export default Register;
