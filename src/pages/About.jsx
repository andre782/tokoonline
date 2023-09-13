import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SizesExample from "../component/Form"
import "./about.css"
import img from "../images/about/a6.jpg"
import video from "../images/about/1.mp4"
import blog1 from "../images/blog/blog-1.jpg"
import blog2 from "../images/blog/blog-2.jpg"
import blog3 from "../images/blog/blog-3.jpg"
import blog4 from "../images/blog/blog-4.jpg"
import Map from "../component/Map"



const About = () => {
  return (
    <>
     <div className="banner-containera">
      <div className="banner-font">
      <p style={{ fontSize: '40px', fontWeight: 'bold',  color: 'white' }}><span>#Know Us</span></p>
      <p style={{ fontSize: '25px',  color: 'white' }}>Get to know us more</p>
    </div>
    </div>

      <div className="container-xxl">
    <div className='gird-col-2 d-flex'>
      <div>
        <img src={img} alt="" className='gmbr'/>
      </div>
      <div className='content'>
      <div className='text-center p-5'>
                <h1>Siapa kita sebenarnya</h1>
            </div>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam tempore unde aperiam, consectetur harum a eum error,
            libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
      </div>
    </div>
    </div>

    <div className='dwnload'>
      <h2 className='color'>Download Our <span className='pp'>App</span></h2>
    </div>

    <div className='container-xxl '>
         <video className='video' autoPlay controls width="80%" height="100%">
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
    </div>

      <div className='text-center p-5'>
                <h1>Apa pelanggan bilang</h1>
                <p>pelanggan tidak pernah bohong dalam memberikan review nya</p>
            </div>


      {/* card */}
    <div className="d-flex justify-content-center p-5">
       <div className="card mb-3" style={{height: "270px", maxWidth: '800px', flex: 1, marginLeft: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Ganti "..." dengan path gambar yang sesuai */}
            <img src={blog1} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-bodyx">
              <h5 className="card-title">Marvel Clein</h5>
              <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/>
. Doloribus maxime consequatur, ipsam architecto incidunt volup
tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi</small></p>
            </div>
             {/* Buat div baru untuk styling tombol */}
            
          </div>
              
        </div>
      </div>

      <div className="card mb-3" style={{height: "270px", maxWidth: '800px', flex: 1, marginLeft: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Ganti "..." dengan path gambar yang sesuai */}
            <img src={blog2} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-bodyx">
              <h5 className="card-title">Melisa Ivy</h5>
              <p className="card-text"><small className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
. Doloribus maxime consequatur, ipsam architecto incidunt volup
tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.
              </small></p>
            </div>
             {/* Buat div baru untuk styling tombol */}
            
          </div>
              
        </div>
      </div>
    </div>


    <div className="d-flex justify-content-center p-5">
       <div className="card mb-3" style={{height: "270px", maxWidth: '800px', flex: 1, marginLeft: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Ganti "..." dengan path gambar yang sesuai */}
            <img src={blog3} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-bodyx">
              <h5 className="card-title">Tristan Ann</h5>
              <p className="card-text"><small className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
. Doloribus maxime consequatur, ipsam architecto incidunt volup
tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.
                </small></p>
            </div>
             {/* Buat div baru untuk styling tombol */}
            
          </div>
              
        </div>
      </div>

      <div className="card mb-3" style={{height: "270px", maxWidth: '800px', flex: 1, marginLeft: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Ganti "..." dengan path gambar yang sesuai */}
            <img src={blog4} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-bodyx">
              <h5 className="card-title">Kenny Ackerman</h5>
              <p className="card-text"><small className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
. Doloribus maxime consequatur, ipsam architecto incidunt volup
tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.
                </small></p>
            </div>
             {/* Buat div baru untuk styling tombol */}
            
          </div>
              
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-center p-5">
       <div className="card mb-3" style={{height: "270px", maxWidth: '800px', flex: 1, marginLeft: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Ganti "..." dengan path gambar yang sesuai */}
            <img src={blog1} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-bodyx">
              <h5 className="card-title">Annie Leonhardt</h5>
              <p className="card-text"><small className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
. Doloribus maxime consequatur, ipsam architecto incidunt volup
tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.
                </small></p>
            </div>
             {/* Buat div baru untuk styling tombol */}
            
          </div>
              
        </div>
      </div>

      <div className="card mb-3" style={{height: "270px", maxWidth: '800px', flex: 1, marginLeft: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Ganti "..." dengan path gambar yang sesuai */}
            <img src={blog2} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-bodyx">
              <h5 className="card-title">Andre</h5>
              <p className="card-text"><small className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
. Doloribus maxime consequatur, ipsam architecto incidunt volup
tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.
                </small></p>
            </div>
             {/* Buat div baru untuk styling tombol */}
            
          </div>
        </div>
      </div>
    </div>





      {/*Map */}

  


  

    </>
  )
}

export default About