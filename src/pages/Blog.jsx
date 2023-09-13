import React from 'react'
import "./blog.css"
import img from "../images/blog/b1.jpg"
import img2 from "../images/blog/b2.jpg"
import img3 from "../images/blog/b3.jpg"
import img4 from "../images/blog/b4.jpg"

const Blog = () => {
  return (
    <>
    <div className="banner-containerb">
      <div className="banner-font">
      <p style={{ fontSize: '40px', fontWeight: 'bold', color: 'white' }}><span>#Read More</span></p>
      <p style={{ fontSize: '25px', color: 'white' }}>Get to know what our trusted customers say...</p>
    </div>
    </div>

    <div className='text-center p-5'>
                <h1>Explore more in our library</h1>
                <p>Why we have trending Outfits Everywhere</p>
            </div>

    
    <div className="continer-xxl">
    <div className="d-flex justify-content-center p-5">
    <div className="card mb-3" style={{padding: '20px',height: "400px", maxWidth: '900px', flex: 1, marginLeft: '10px' }}>
     <div className="row g-0">
       <div className="col-md-4">
         {/* Ganti "..." dengan path gambar yang sesuai */}
         <img src={img} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
       </div>
       <div className="col-md-8">
         <div className="card-bodyx">
           <h5 className="card-title" style={{marginRight: '50px'}}>Marvel Clein</h5>
           <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?

            Last updated 3 mins ago</small></p>
         </div>
          {/* Buat div baru untuk styling tombol */}
           
       </div>
     </div>
   </div>
 </div>
    </div>

    <div className="continer-xxl">
    <div className="d-flex justify-content-center p-5">
    <div className="card mb-3" style={{height: "230px", maxWidth: '900px', flex: 1, marginLeft: '10px', marginTop: '30px', padding: '20px' }}>
     <div className="row g-0">
       <div className="col-md-4">
         {/* Ganti "..." dengan path gambar yang sesuai */}
         <img src={img2} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
       </div>
       <div className="col-md-8">
         <div className="card-bodyx">
           <h5 className="card-title">Melisa Ivy</h5>
           <p className="card-text"><small className="text-muted">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit
          . Doloribus maxime consequatur, ipsam architecto incidunt volup
         tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.

          Last Updated now
            </small></p>
         </div>
          {/* Buat div baru untuk styling tombol */}
           
       </div>
     </div>
   </div>
 </div>
    </div>

    <div className="continer-xxl">
    <div className="d-flex justify-content-center p-5">
    <div className="card mb-3" style={{height: "300px", maxWidth: '900px', flex: 1, marginLeft: '10px', padding: '20px' }}>
     <div className="row g-0">
       <div className="col-md-4">
         {/* Ganti "..." dengan path gambar yang sesuai */}
         <img src={img3} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
       </div>
       <div className="col-md-8">
         <div className="card-bodyx">
           <h5 className="card-title">Tristian Ann</h5>
           <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit
. Doloribus maxime consequatur, ipsam architecto incidunt volup       
tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.

Last Updated now</small></p>
         </div>
          {/* Buat div baru untuk styling tombol */}
       </div>
     </div>
   </div>
 </div>
    </div>



    <div className="continer-xxl">
    <div className="d-flex justify-content-center p-5" style={{ marginBottom: '100px' }}>
    <div className="card mb-3" style={{height: "400px", maxWidth: '900px', flex: 1, marginLeft: '10px', padding: '20px'  }}>
     <div className="row g-0">
       <div className="col-md-4">
         {/* Ganti "..." dengan path gambar yang sesuai */}
         <img src={img4} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
       </div>
       <div className="col-md-8">
         <div className="card-bodyx">
           <h5 className="card-title">Phillip Omosh</h5>
           <p className="card-text"><small className="text-muted">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit
. Doloribus maxime consequatur, ipsam architecto incidunt volup
tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.

Last Updated now
            </small></p>
         </div>
          {/* Buat div baru untuk styling tombol */}
          
       </div>
     </div>
   </div>
 </div>
    </div>
    
  </>
  )
}

export default Blog