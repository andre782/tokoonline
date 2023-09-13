import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import { BsFillCartPlusFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Product, { PRODUCTS1 } from "./Product";
import ReactStars from 'react-rating-stars-component';
// import { ShopContext } from "../component/shopcontext"
import "../pages/shop.css";
import { Link } from 'react-router-dom';

const ShopItems = () => {
  // const context = useContext(ShopContext);
  // const { viewProductDetails, addToCart, cartItems } = context;
  // const cartItemsCount = context.cartItems[id];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  return (
    <div className='container-xxl'>
      <div className="row">
        {[...Product, ...PRODUCTS1].map((produk) => (
          <div key={produk.id} className="col-md-3" style={{ marginTop: '30px' }}>
            <Card className="custom-cardi d-flex">
              <Card.Img className="img" variant="top" src={produk.gambar} />
              <Card.Body className='card-body'>
                <Card.Title><p className="merek">{produk.merek}</p></Card.Title>
                <Card.Text><p className="status">{produk.judul}</p></Card.Text>
                <div className="star">
                  <ReactStars
                    count={5}
                    edit={false}
                    // onChange={ratingChanged}
                    value={4.5}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
                <p className='star-nominal'>5.00</p>
                <span>{formatPrice(produk.harga)}</span>
                <br />
                <div className="centered-content">
                <Link >Lihat detailnya</Link>
                  <Button 
                  className="tombol-diskons custom-buttons"
                  
                  >
                    Tambahkan 
                    <br />
                    <BsFillCartPlusFill />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopItems;
