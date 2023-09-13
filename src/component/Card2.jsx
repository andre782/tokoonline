import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Product from "../component/Product"
import  "./fitur.css"

function Card2() {
  return (
    <div className="container-xxl">
    <div className="card-container p-5">
    {Product.slice(1, 5).map(produk =>(
      <Card key={produk.id} className="custom-card">
        <Card.Img className="img" variant="top" src={produk.gambar} />
        <Card.Body>
          <Card.Title><p className="merek">{produk.merek}</p></Card.Title>
          <Card.Text><p className="status">{produk.judul}</p></Card.Text>
          <Button className="tombol-diskon"> {produk.status}<p className="diskon">{produk.diskon}</p></Button>
        </Card.Body>
      </Card>
        ))}
      
      </div>
      
    </div>
  );
}

export default Card2;
