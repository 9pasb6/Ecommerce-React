import React, { useContext } from 'react'
import Cart from '../../assets/cart.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidged = () => {

  const {totalQuantity} = useContext(CartContext);


  return (
    <>
    
   
      <Link to='/cart'  style={{ display: totalQuantity > 0 ?'block':'none', color: 'white', textDecoration: 'none'}}>
      <img src={Cart} alt="cart-widget" />
      <>{totalQuantity}</>
      </Link>
      
   
 

  
   


    </>
  )
}

export default CartWidged