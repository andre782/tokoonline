import React from 'react'
import { BsDiscord, BsInstagram, BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import google from "../images/pay/play.jpg"
import Appstore from "../images/pay/app.jpg"
import Payment from "../images/pay/pay.png"
import "../App.css"

const Footer = () => {
  return (
    <footer className='footer px-5'>
        <div className="container-xxl">
          <div className='row'>
              <hr  className='m-1'/>
              <div className="col-12 d-flex" style={{ marginTop: "40px" }}>
                <div className="col-6 text-center mb-5">
                  <h3>Sign up untuk berita baru</h3>
                  <p>to get update on All <Link>Spesial pelanggan</Link></p>
                </div>

                <div className="col-4">
                <InputGroup className="mb-1">
                  <Form.Control
                    className="searh-produk"
                    placeholder="Cari Produk"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text className="cari-produk" id="basic-addon2">
                    Submit
                  </InputGroup.Text>
                </InputGroup>
                </div>
              </div>
              <hr  className='m-3'/>



            <div className="col-4 d-flex flex-column">
                <h2 className='mb-4'>Kontak kami</h2>
                <div className='footer-detail'>
                  <p><b>Alamat:</b> Pasar kucing, Paguyangan, Brebes, Jawa tengah</p>
                  <p><b>Phone:</b> (+62) 86754325432</p>
                  <p><b>Jam kerja:</b> jam 08:00 - 16:00</p>
                  <p><b>Ikuti akun social media kami</b></p>
                  <Link className='p-2'><BsDiscord className='font'/></Link> 
                  <Link className='p-2'><BsInstagram className='font'/></Link>
                  <Link className='p-2'><BsGithub className='font'/></Link>
                  <Link className='p-2'><FaTiktok className='font'/></Link>
                </div>
            </div>
              
              <div className='col-2'>
                <h3 className='mb-4'>About</h3>
                <div className='footer-detailsx d-flex flex-column'>
                  <Link className='mb-3'>
                    About us
                  </Link>
                  <Link className='mb-3'>
                    Delivery
                  </Link> <Link className='mb-3'>
                    Privacy Policy
                  </Link> <Link className='mb-3'>
                    Terms and kondisi
                  </Link> <Link className='mb-3'>
                    Fee policy
                  </Link>
                </div>
              </div>

              <div className='col-2'>
                <h3 className='mb-4'>Account</h3>
                <div className='footer-details d-flex flex-column'>
                  <Link className='mb-3'>
                    Profile
                  </Link>
                  <Link className='mb-3'>
                    View Cart
                  </Link>
                   <Link className='mb-3'>
                    Help
                  </Link>
                   <Link className='mb-3'>
                    Pembayaran
                  </Link> 
                  <Link className='mb-3'>
                    My wishlist
                  </Link>
                  <Link className='mb-3'>
                   Kupon
                  </Link>
                  
                  
                </div>
              </div>

              <div className='col-4'>
                <h3 className='mb-4'>Install App</h3>
                <div className='footer-details d-flex flex-column'>
                  <div>
                  <Link className='hover text-black'>
                    tersedia di google play store & App store
                    <img src={google} alt="" className='pay'/>
                    <img src={Appstore} alt="" className='pay'/>
                  </Link>
                    <br/>
                  <Link className='hover text-black'>
                    metode Pembayaran
                    <br/>
                    <img src={Payment} alt="" className='margin'/>
                  </Link>
                   
                </div>
                </div>
              </div>
              
              <hr/>
            <div className='row d-flex justify-content-between'>
              <div className="col-3">
                <p className='copyrught'>&copy; Developer by Andre Developer 2023</p>
              </div>

                <div className="col-3 d-flex justify-content-around">
                  <Link className='text-black'>Privacy policy</Link>
                  <Link className='text-black'>Terms of use</Link>
                  <Link className='text-black'>Contact me</Link>
                </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer