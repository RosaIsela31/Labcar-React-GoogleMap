import React from 'react';
import { FaTimes } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";


import './style.css';

const ModalLogin = () => {
  return (
    <div className='modallogin-all'>
       <div className='container-modalregister'>
       <FaTimes className='x'/>
       <div className='container-user'>
         <FaUserCircle/>
       </div> <br/>
       <div className='container-user'>
         <div className='form'>
           <div className='container-input'>
              <FaUserAlt className='icon-input'/>
              <input type='text' placeholder='Usuario' className='input' />
              <br/>
              <FaUnlockAlt className='icon-input'/>
              <input type='text' placeholder='Contraseña' className='input' />
              <br/> 
              <div className='div-btn-login'>
                <button className='btn-login'>Iniciar Sesión</button>
              </div>
           </div>

         </div>

       </div>

       </div>
      
    </div>
  )
}

export default ModalLogin;