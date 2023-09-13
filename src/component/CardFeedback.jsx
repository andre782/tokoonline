import React from 'react';
import Feedback1 from '../images/blog/blog-1.jpg';
import Feedback2 from '../images/blog/blog-2.jpg';
import Feedback3 from '../images/blog/blog-3.jpg';
import Feedback4 from '../images/blog/blog-4.jpg';
import "./hero.css"

const CardFeedback = () => {
  return (
    <div className='container-xxl'>
        <div className="d-flex" style={{ gap: '40px' }}>
      <div className="cardt" style={{ maxWidth: '18rem' }}>
        <img src={Feedback1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-textz">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <button className="setting-button btn btn-sm">Learn more</button> {/* Tambahkan kelas btn-sm */}
      </div>

      <div className="cardt" style={{ maxWidth: '18rem' }}>
        <img src={Feedback2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-textz">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <button className="setting-button btn btn-sm">Learn more</button> {/* Tambahkan kelas btn-sm */}
      </div>

      <div className="cardt" style={{ maxWidth: '18rem' }}>
        <img src={Feedback3} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-textz">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="setting-button btn btn-sm">Learn more</button> {/* Tambahkan kelas btn-sm */}
        </div>
      </div>

      <div className="cardt" style={{ maxWidth: '18rem' }}>
        <img src={Feedback4} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-textz">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <button className="setting-button btn btn-sm">Learn more</button> {/* Tambahkan kelas btn-sm */}
      </div>
    </div>
    </div>

    
  );
}

export default CardFeedback;
