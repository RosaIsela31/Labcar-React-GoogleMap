import React from 'react'
import Map from '../Map/Map'

import './style.css'

import { MdRoom } from "react-icons/md";
import { MdSend } from "react-icons/md";


const FourthSection = () => {
  return (
    <div>
      <div className='tarifas'>
        <div className='container-text-tarifas'>
          <p>
            <b>Tarifas</b><br/><br/>
            Consulta las tarifas LabCar aquí 
          </p><br/>
          <div className='container-input'>
            <MdRoom/>
            <input placeholder='Ingrese punto de inicio' className='input'/>
          </div>
          <br/>
          <div className='container-input'>
            <MdSend/>
            <input placeholder='Ingrese su destino' className='input'/>
          </div>
          <br/>
          <button className='btn-route'><b>¡TRAZAR RUTA!</b></button>
        </div>
        <div className='container-map'>
          <Map className='map'/>
        </div>
      </div>
    </div>
  )
}

export default FourthSection;