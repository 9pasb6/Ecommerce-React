import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';


const Footer = () => {

    const phoneNumber = '+57 300 123 4567'; 
    const address = 'Calle Palmas 123, Medellín'; 
  
  return (
    <>
     <footer className="footerCont text-light p-4">
  <div className="containerFoot">
    <div className="row">
      <div className="col-md-6 d-flex justify-content-start">
       <div>
       <h4>Información de Contacto</h4>
        <p>Número de Teléfono: {phoneNumber}</p>
        <p>Dirección: {address}</p>
       </div>
      </div>
      <div className="col-md-6 d-flex justify-content-end">
       <div className='d-flex flex-column'>
       <h4>Redes Sociales</h4>
        <a href="https://www.instagram.com/" className='nav-item' target="_blank" rel="noopener noreferrer">
          <img src={instagram} height="40px" alt="Instagram" />
          <p >Instagram</p>
        </a>
        <a href="https://www.facebook.com/" className='nav-item' target="_blank" rel="noopener noreferrer">
          <img src={facebook}  height="40px" alt="Facebook" />
          <p >Facebook</p>
        </a>
       </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer