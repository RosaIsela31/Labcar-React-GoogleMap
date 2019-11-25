import React from 'react';
import { FaTimes } from "react-icons/fa";

import '../register/style.css';
import './style.css';

const ModalDrivers = () => {
  return (
    <div className='container-principal-register'><br/>
       <div className='container-driver'> <br/>
       <div className='container-iconx'>
         <FaTimes className='icon-x'/>
       </div> <br/>
       <div className='form-drivers'>
         <div className='question'>Registrando tu vehículo</div><br/>
         <p><b>¿Tienes vehículo de 4 puertas?</b></p>
            <select className='select'>
              <option value="selection">Selecciona una opción</option>
              <option value="correct">Correcto</option>
              <option value="false">Falso</option>
            </select>
         <p><b>Marca</b></p>
            <select className='select'>
              <option value="selection">Selecciona una opción</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
         <p><b>Modelo</b></p>
            <select className='select'>
              <option value="selection">Selecciona una opción</option>
              <option value="1">2015</option>
              <option value="2">2016</option>
              <option value="3">2017</option>
              <option value="4">2018</option>
              <option value="5">2019</option>
            </select>
         <p><b>Año</b></p>
            <select className='select'>
              <option value="selection">Selecciona una opción</option>
              <option value="1">2015</option>
              <option value="2">2016</option>
              <option value="3">2017</option>
              <option value="4">2018</option>
              <option value="5">2019</option>
            </select>
         <p><b>Número de la matrícula</b></p>
            <select className='select'>
              <option value="selection">Selecciona una opción</option>
              <option value="1">8374</option>
              <option value="2">7583</option>
              <option value="3">8840</option>
              <option value="4">2374</option>
              <option value="5">5738</option>
            </select>

         <p>La información de la matrícula ayuda  a los clientes<br/> a identificar tu vehículo</p><br/>


         <input type='submit' value='ENVIAR SOLICITUD' className='send-driver'/>

       </div>
       </div>
    </div>
  )
}

export default ModalDrivers;
