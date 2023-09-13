import React from 'react'
// import Product from "./Productx"
import ShopItems from "../component/ShopItems"
import HeroShop from "../component/HeroShop"
import "./shop.css"


const Shop = () => {
  return (
    <>
    <div className="banner-container">
      <div className="banner-font">
      <p style={{ fontSize: '40px', fontWeight: 'bold', color: 'white' }}><span className="ijo">#100%</span>Off On Semua Products</p>
      <p style={{ fontSize: '20px',color: 'white' }}>kamu pesan kita mengantar...</p>
    </div>
    </div>

      <div className='d-flex'>
       <ShopItems />
    </div>
    
    <div className='halaman container-xxl text-center p-10'>
      <h3>halaman</h3>
    </div>

      <div className='container-xxl'>
        <HeroShop/>
      </div>
    </>
  )
}

export default Shop