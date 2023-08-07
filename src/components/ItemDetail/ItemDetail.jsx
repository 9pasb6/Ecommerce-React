import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'

const ItemDetail = ({id, title, image, price, description, stock}) => {
  return (
    <>
    <article className="card ">
      <header>
        <h3>{title}</h3>
      </header>
      <picture>
        <img src={image} height={270} alt={title} />
      </picture>
     
      <section className='pt-2'>
        <h5>precio: {price}</h5>
        <p>cantidad disponible: {stock}</p>
        <p> {description}</p>
      </section>
      <footer className='pt-3'>
      <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log("cantidad agregada")}/>
      </footer>
    </article>

    </>
    
  )
}

export default ItemDetail