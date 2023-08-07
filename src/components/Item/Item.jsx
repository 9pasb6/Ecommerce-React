import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({id, title, image, price, stock}) => {

  return (
    <>
    
    <article className="card ">
      <header>
        <h3>{title}</h3>
      </header>
      <picture>
        <img src={image} height={270} alt={title} />
      </picture>
      <section>
        <p>precio: {price}</p>
        <p>cantidad disponible: {stock}</p>
      </section>
      <footer>
        <Link to={`/item/${id}`} className="Option">
         <button>Ver detalle</button>
        </Link>
      </footer>
    </article>

    </>

  )
}

export default Item