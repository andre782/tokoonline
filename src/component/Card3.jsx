import React from 'react';
import img from "../images/banner/b17.jpg"
import img2 from "../images/banner/b10.jpg"
import "./hero.css"

const Card3 = () => {
  return (
    <div className="d-flex justify-content-center p-5">
       <div className="card mb-3" style={{height: "270px", maxWidth: '800px', flex: 1, marginLeft: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Ganti "..." dengan path gambar yang sesuai */}
            <img src={img} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-bodyx">
              <h5 className="card-title">Hot deals</h5>
              <h4 className="card-text">Beli Satu dapat Satu.</h4>
              <p className="card-text"><small className="text-muted">koleksi terbaik dan baju yang lucu</small></p>
            </div>
             {/* Buat div baru untuk styling tombol */}
              <button className="btns custom-button">Learn More</button>
            
          </div>
              
        </div>
      </div>

      <div className="card mb-3" style={{height: "270px", maxWidth: '800px', flex: 1, marginLeft: '10px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Ganti "..." dengan path gambar yang sesuai */}
            <img src={img2} className="img-fluid rounded-start float-end" alt="..." style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
          </div>
          <div className="col-md-8">
            <div className="card-bodyx">
              <h5 className="card-title">Hot deals</h5>
              <h4 className="card-text">Beli Satu dapat Satu.</h4>
              <p className="card-text"><small className="text-muted">koleksi terbaik dan baju yang lucu</small></p>
            </div>
             {/* Buat div baru untuk styling tombol */}
              <button className="btns custom-button">Learn More</button>
            
          </div>
              
        </div>
      </div>

    </div>
  );
}

export default Card3;
