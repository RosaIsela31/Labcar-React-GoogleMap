import React from 'react'
import phone from '../../img/celular.png'
import './style.css'

const SecondSection = () => {
  return (
    <div className='second-section'>
      <div className='container-imgmobile'>
        <br/>
        <p>La nueva App</p>
        <br/>
        <img src={phone} alt='phone' className='phone' />
      </div>
      
      <div className='container-imgdesktop'>
        <div className='container-imgcel'>
          <img src={phone} alt='phone' className='phone' />
        </div>
        <div className='container-next'> <br/><br/>
          <p>
            <b>Descarga la nueva app</b><br/><br/>
              La versión actualizada de Labcar <br/>
              está llena de nuevas funciones para <br/>
              llegar a donde quieras aún más fácil <br/>
              y rápido. <br/><br/>

              Con solo tocar un botón, un auto  <br/>
              llega justo a tu ubicación. Subete y  <br/>
              no te preocupes: tu conductor sabe <br/>
              exactamente a dónde ir. <br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SecondSection;
