import React from 'react';
import logoblanco from '../../img/logo-blanco.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import googleplay from '../../img/google-play.png';
import appstore from '../../img/app-store.png';

import './style.css';

const FifthSection = () => {
  return (
    <div>
      <div className='footer-container'>
        <img src={logoblanco} alt='logoblanco' className='logoblaco-footer'/>
        <div className='container-tex'>
          <div className='first'>
            <p>
              Viaja <br/><br/>
              Conduce <br/><br/>
              Ciudades <br/><br/>
              Entregas <br/><br/>
              ¿Cómo funciona? <br/><br/>
              Países <br/><br/>
              Seguridad
            </p>
          </div>
          <div className='second'>
            <div className='containe-icons'>
              <FaFacebook className='icon'/>
              <FaTwitter className='icon'/>
              <FaLinkedinIn className='icon'/>
              <FaApple className='icon'/>
              <FaPlay className='icon'/>
            </div>
            <br/><br/>
            <img src={googleplay} alt='googleplay' className='img-fifth' />
            <br/>
            <img src={appstore} alt='appstore' className='img-fifth' />

          </div>
        </div>
        <p>© 2019 LabCar Technologies Inc.</p>
      </div>


      <div className='footer-container-desktop'>
        <img src={logoblanco} alt='logoblanco' className='logoblaco-footer-desktop'/>
        <div className='container-colums-desktop'>
           <div className='column-one'>
              <FaFacebook className='icon'/>
              <FaTwitter className='icon'/>
              <FaLinkedinIn className='icon'/>
              <FaApple className='icon'/>
              <FaPlay className='icon'/>
            </div>
          <div className='column-two'>
          <p>
              Viaja <br/><br/>
              Conduce <br/><br/>
              Ciudades <br/><br/>
              Entregas <br/><br/>
              ¿Cómo funciona? <br/><br/>
              Países <br/><br/>
              Seguridad
          </p>
          </div>
          <div className='column-three'>
            <p>
              Oportunidades <br/><br/>
              Nueva historia <br/><br/>
              API de Labcar <br/><br/>
              Eventos <br/><br/>
              Desarrolladores <br/><br/>
              Servicios <br/><br/>
              Laboratoria
            </p>
          </div>

          <div className='column-four'>
            <br/><br/>
            <img src={googleplay} alt='googleplay' className='img-fifth' />
            <br/>
            <img src={appstore} alt='appstore' className='img-fifth' />
          </div>
        </div>
        <p>© 2019 LabCar Technologies Inc.</p>
      </div>
    </div>
  )
}

export default FifthSection;