import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import sad from '../../assets/taza.png'
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total,removeProduct } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className='containerCart'>
                <img src={sad} alt="sad" />
                <h1>No hay productos en el carrito</h1>
               <button> <Link to='/' className='linkDelete'>Productos</Link></button>
            </div>
        );
    }

    return (
        <div>
            {cart.map(product => (
                <CartItem key={product.id} product={product} onRemove={removeProduct}/>
            ))}
           <div className='containerCart2'>
           <h3>Total: ${total}</h3>
           <div className='containerCart3'>
           <button onClick={clearCart} className="Button">Limpiar carrito</button>
           <button> <Link to='/checkout' className='linkDelete'>Checkout</Link></button>
           </div>
         
           </div>
        </div>
    );
}

export default Cart;
