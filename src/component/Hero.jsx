import React from "react";
import Icon1 from "../images/icons/icon1.png";
import Icon2 from "../images/icons/icon2.png";
import Icon3 from "../images/icons/icon3.png";
import Icon4 from "../images/icons/icon4.png";
import Icon6 from "../images/icons/icon6.png";
import "./hero.css"

const Hero = () => {
  return (
    <div className="container-xxl">
        <div className="d-flex justify-content-center ">
      <div className="card" >
        <img src={Icon1} className="card-img-top mx-auto small-icon" alt="Icon 1" />
        <div className="card-body">
          <p className="card-textb">
            Banyak pilihan
          </p>
        </div>
      </div>
      {/* Add more icons here using the same structure */}
      <div className="card" >
        <img src={Icon2} className="card-img-top mx-auto small-icon" alt="Icon 2" />
        <div className="card-body">
          <p className="card-textb">
            pesanan aman 
          </p>
        </div>
      </div>
      <div className="card" >
        <img src={Icon3} className="card-img-top mx-auto small-icon small-icon" alt="Icon 2" />
        <div className="card-body">
          <p className="card-textb">
            Harga murah
          </p>
        </div>
      </div>
      <div className="card">
        <img src={Icon4} className="card-img-top mx-auto small-icon" alt="Icon 2" />
        <div className="card-body">
          <p className="card-textb">
             24/7 bantuan
          </p>
        </div>
      </div>
      <div className="card">
        <img src={Icon6} className="card-img-top mx-auto small-icon" alt="Icon 2" />
        <div className="card-body d-flex justify-content-center">
            <p className="card-textb">
                 harga spesial
            </p>
             
        </div>
      </div>
      </div>
      {/* Repeat the structure for other icons */}
    </div>
  );
};

export default Hero;
