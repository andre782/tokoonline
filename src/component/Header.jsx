import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/apneck.png";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { AiOutlineInbox } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import Banner1 from "../images/banner/b20.jpg";
import "../App.css"

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="header-top-strip p-2 shadow-sm backgrund">
        <div className="row align-items-center">
          <div className="col-6">
            <p className="fs-5">The trending outfit at 100% off</p>
          </div>
          <div className="col-6 d-flex justify-content-between align-items-end">
            <div>
              <a href="tel:+6286754321245">
                Call saya +6286754321245
                <Link>
                  <FiPhoneCall className="bi bi-md mx-2" />
                </Link>
                <Link>
                  <AiOutlineMail className="bi bi-md mx-2" />
                </Link>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="posisi">
        <header className="header-upper custom-bg-color">
          <div className="container-xxl">
            <div className="row d-flex align-items-center margin-top">
              <div className="col-md-2 d-flex">
                <Link to="/">
                  <img src={logo} alt="" className="img-fluid logo" />
                </Link>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <InputGroup className="mb-1">
                  <Form.Control
                    className="searh-produk"
                    placeholder="Cari Produk"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text className="cari-produk" id="basic-addon2">
                    Cari
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div className="col-md-7 d-flex align-items-center justify-content-end">
              <Link to={"/"} className={`link-item ${location.pathname === '/' ? 'green-text' : ''}`}>
              Home
            </Link>
            <Link to={"shop"} className={`link-item ${location.pathname === '/shop' ? 'green-text' : ''}`}>
              Shop
            </Link>
            <Link to={"blog"} className={`link-item ${location.pathname === '/blog' ? 'green-text' : ''}`}>
              Blog
            </Link>
            <Link to={"About"} className={`link-item ${location.pathname === '/About' ? 'green-text' : ''}`}>
              About
            </Link>
            <Link to={"Contact"} className={`link-item ${location.pathname === '/Contact' ? 'green-text' : ''}`}>
              Contact
            </Link>
                <div className="d-flex">
                  <Link to={"login"}>
                    <RiAccountPinCircleLine className="icon" />
                  </Link>
                  <Link to={"wishlist"}>
                    <AiOutlineInbox className="icon" />
                  </Link>
                  <Link to={"cart"}>
                    {" "}
                    <BsCartPlus className="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
