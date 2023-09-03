import React from 'react';

const CartItem = ({ product, onRemove }) => {
    const { id, title, image, price, quantity } = product;
 

    return (

        <article className="card ">
      <header>
        <h3>{title}</h3>
      </header>
      <picture>
        <img src={image} height={270} alt={title} />
      </picture>
     
      <section className='pt-2'>
            <p>{title}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price * quantity}</p>
      </section>
        <footer>
      <button onClick={() => onRemove(id)}>Eliminar</button>

        </footer>
    </article>


     
    );
}

export default CartItem;
