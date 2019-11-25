import React from 'react';
import taxi from '../../img/taxi.jpg';
import taxi2 from '../../img/taxi2.jpg';

import './style.css';

const FirstComponent = () => {
  return (
    <div>
      <div className='container-imgtaxi-div'>
          <img src={taxi} alt='taxi' className='img-taxi'/>
          <div className='firstContainer-yellow'>
              <div className='container-p-initial'>
                  <br/>
                  <p><b>Comienza a viajar con LabCar</b></p>
                  <button className='btn-download'><b>Descarga el app</b></button>
              </div>
          </div>
      </div>

      <div className='container-imgtaxi-div-tablet'>
          <img src={taxi2} alt='taxi' className='img-taxi2'/>
          <div className='firstContainer-yellow-tablet'>
              <div className='container-p-initial-tablet'>
                  <br/>
                  <p><b>Comienza a viajar con LabCar</b></p>
                  <button className='btn-download-tablet'><b>Descarga el app</b></button>
              </div>
          </div>
      </div>

      <div className='container-imgtaxi-div-desktop'>
          <img src={taxi2} alt='taxi' className='img-taxi2'/>
          <div className='firstContainer-yellow-desktop'>
              <div className='container-p-initial-desktop'>
                  <br/>
                  <p>
                    <b>
                      Disfruta del viaje <br/>
                      Eres dueño de tu tiempo
                    </b>
                  <br/><br/>
                      Viaja con Labcar 
                  </p>
                      <br/>
                      <button className='btn-download-desktop'>REGÍSTRATE</button> <br/>

                      <pre>____________  O bien  ____________</pre>

                      <br/>
                      <button className='btn-driver'>Conviértete en un conductor</button>
              </div>
          </div>
      </div>

  
  
      
    </div>
  )
}

export default FirstComponent;