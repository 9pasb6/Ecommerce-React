import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, title, image, price, description, stock}) => {
  
  const [cantidadAdd, setCantidadAdd] = useState(0);

// agregar producto

const {addProducts} = useContext(CartContext);


  const handleOnAdd = (quantity) =>{

      setCantidadAdd(quantity);

      const product = {
        id, title, image, price, description /// necesario para setear datos al cartcontext
      }

      addProducts(product, quantity);
  }


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
      
      {
        cantidadAdd > 0 ?(
      
          <>
          <div className='containerCart3'>
            <button >
            <Link to='/cart' className='linkDelete'>Terminar compra</Link>
            </button>
            <button>
            <Link to='/' className='linkDelete'>Seguir comprando</Link> 
            </button>
          </div>
          </>

        ) :  (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
        ) 
      }
      
      
{/*       <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log("cantidad agregada")}/>
 */}      </footer>
    </article>

    </>
    
  )
}

export default ItemDetail