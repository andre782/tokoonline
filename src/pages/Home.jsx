import React from 'react'
import { Link } from 'react-router-dom'
import Hero from "../component/Hero"
import FeatureProduct from "../component/FeatureProduct"
import Banner2Home from "../component/Banner2Home"
import Card2 from "../component/Card2"
import Card3 from "../component/Card3"
import CardFeedback from '../component/CardFeedback'

import "./home.css"

const HOME = () => {



  return (
    <div>
      <section className='banner p-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
              <span className='p-2 text-black'>perdagangan dan penawaran!!</span>
              <h1>Super Value Deals</h1>
              <h2>Semua produk</h2>
              <p>berhemat lebih banyak dengan AndreNeck</p>
              <Link className='button-link'>belanja sekarang</Link>
            </div>
          </div>
        </div>
      </section>
    
    <Hero/>


      <section className="featuerd-product p-5">
        <div className="container-xxl">
          <div className="row">
            <div className='text-center'>
                <h1>Our Fitur dan Produk</h1>
                <p>di segala cuaca dan desain moderen</p>
            </div>
            
              <FeatureProduct/>
            
          
          </div>

          <Banner2Home/>
        </div>
        <div className='text-center p-5'>
                <h1>Barang baru!</h1>
                <p>di desain oleh designer profesional</p>
            </div>
            <Card2/>

            <div className='container-xxl'>
              <Card3/>
            </div>
            <div className='text-center p-5'>
                <h1>Apa si kata pelnggan yang sudah beli!</h1>
                <p>di bawah adalah tenggapan pelanggan yang sudah beli</p>
            </div>
            <CardFeedback/>

           
      </section>
    </div>
  )
}

export default HOME