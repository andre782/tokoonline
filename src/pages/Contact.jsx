import React from 'react'
import Map from "../component/Map"
import "./contact.css"

const Contact = () => {
  return (
    <>
    <div className="banner-containera">
    <div className="banner-fontx">
    <p style={{ fontSize: '40px', fontWeight: 'bold', color: 'orange' }}><span>Reach Out to Us</span></p>
    <p style={{ fontSize: '25px', color: 'orange' }}>We are only a step away from you</p>
  </div>
  </div>


  <div className='container-xl'>
      <Map/>
    </div>
  </>
  )
}

export default Contact