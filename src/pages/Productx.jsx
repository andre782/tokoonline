import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ShopContext } from '../component/shopcontext';
import ReactStars from 'react-rating-stars-component';
// import './shop.css';

const Products = (props) => {
  const { id, gambar, merek, harga, judul, status, diskon } = props.data;

  return (
    <div className="container-xxl">
    <div className="card-container p-5">
    <Card key={id} className="custom-card">
        <Card.Img className="img" variant="top" src={gambar} />
        <Card.Body>
          <Card.Title><p className="merek">{merek}</p></Card.Title>
          <Card.Text><p className="status">{judul}</p></Card.Text>
          <Button className="tombol-diskon"> {status}<p className="diskon">{diskon}</p></Button>
        </Card.Body>
      </Card>
      </div>
      
      </div>

  );
};

export default Products;
