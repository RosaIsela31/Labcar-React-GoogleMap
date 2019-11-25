import React from 'react'
import drive from '../../img/conduce.jpg'
import './style.css';

const ThirdSection = () => {
  return (
    <div>
      <div className='container-drive'>
          <img src={drive} alt='drive' className='drive' />
          <div className='rgba-drive'>
              <div className='text-thirdcontainer'>
                  <br/>
                  <p><b>
                    Conduce cuando quieras </b><br/>
                    LabCar es una opción flexible para alcanzar 
                    tus metas financieras
                  </p>
                  <br/>
                  <div className='container-button'>
                      <button className='btn-thirdsection'>
                        <b>
                        Conviértete en Conductor
                        </b>
                      </button>
                  </div>
              </div>
          </div>
      </div>

      <div className='container-drive-tablet'>
          <img src={drive} alt='drive' className='drive-tablet' />
          <div className='rgba-drive-tablet'>
              <div className='text-thirdcontainer-tablet'>
                  <br/><br/>
                  <p className='p-tex'><b>
                    Conduce cuando quieras </b><br/>
                    LabCar es una opción flexible para alcanzar 
                    tus metas financieras
                  </p>
                  <br/>
                  <div className='container-button-tablet'>
                      <button className='btn-thirdsection-tablet'>
                        <b>
                        Conviértete en Conductor
                        </b>
                      </button>
                  </div>
              </div>
          </div>
      </div>

      

      
      
    </div>
  )
}

export default ThirdSection;