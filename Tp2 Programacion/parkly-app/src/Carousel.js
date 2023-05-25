import React from 'react';
import './stylesheet/Carousel.css';

function Carousel() {
  return (
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../src/img/carousel1.png" className="d-block w-100" alt="./img/carousel1.png"/>
          </div>
          <div class="carousel-item">
            <img src="../src/img/carousel2.png" className="d-block w-100" alt="./img/carousel2.png"/>
          </div>
          <div class="carousel-item">
            <img src="../src/img/carousel3.png" className="d-block w-100" alt="./img/carousel3.png"/>
          </div>
          <div class="carousel-item">
            <img src="../src/img/carousel4.png" className="d-block w-100" alt="./img/carousel3.png"/>
          </div>  
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
  
}

export default Carousel;
