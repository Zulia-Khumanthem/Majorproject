import React from 'react'
import  './Cards.css'
import envelop from '../images/envelope-solid.svg'
import Phone from '../images/phone-volume-solid.svg'
import location from '../images/location-dot-solid.svg'


export default function Cards() {
  return (
    <div className='contact-info'>
        <div className="card">
            <i className='envelop'>
                <img src={envelop} alt="" />
            </i>
                <p>hightech@gmail.com</p>
        </div>

        <div className="card">
            <i className='envelop'>
                <img src={Phone} alt="" />
            </i>
                <p>+91-6900277777</p>
        </div>

        <div className="card" id='loca'>
            <i className='envelop'>
                <img src={location} alt="" />
            </i>
                <p>Imphal, Manipur</p>
        </div>
      
    </div>
  )
}
