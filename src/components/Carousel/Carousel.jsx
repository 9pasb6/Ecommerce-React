import React from 'react'
import cafecito from '../../assets/Carousel/cafecito.jpg'
import mesa from '../../assets/Carousel/mesa.jpg'
import personas from '../../assets/Carousel/personas.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './Carousel.css'


const Carousel = () => {
  return (
    <>
    
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img  src={personas} height="700px" className="d-block w-100" />
          <div className="carousel-caption d-none d-sm-block">
            <h5>Café Americano con 15% de descuento!</h5>
            <p>Disponible hasta el 28 de Noviembre</p>
          </div>
        </div>
        <div className="carousel-item">
          <img  src={mesa} height="700px" className="d-block w-100" />
          <div className="carousel-caption d-none d-sm-block">
            <h5>Comparte los mejores momentos en Guadualito Café</h5>
            
          </div>
        </div>
        <div className="carousel-item">
          <img  src={cafecito} height="700px" className="d-block w-100"/ >
          <div className="carousel-caption d-none d-sm-block">
            
            <h5>Disfruta de tus estudios con una buena taza de café</h5>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    </>
  )
}

export default Carousel