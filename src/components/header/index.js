import React from 'react';
import logo from '../../img/logo.png';

import './style.css'

import { GoThreeBars } from "react-icons/go";


const Navbar = () => {
  return (
    <div>
      <div className='navbar-mobile'>
        <div className='burger-container'>
          <GoThreeBars className='icon-burger'/>
        </div>
        <img src={logo} alt='logo' className='logo-initial' />
        <div className='tags-a'>
          <ul>
            <li>Viaja</li>
            <li>Conduce</li>
            <li>Inicia Sesión</li>
          </ul>

        </div>
      </div>
      
    </div>
  )
}

export default Navbar;
