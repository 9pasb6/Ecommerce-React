import React from 'react'
import Cart from '../../assets/cart.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidged = () => {
  return (
    <>
    <div className='container text-center'>

      <div className='row'> 

      <div className='col'>
      <img src={Cart} alt="robot" />
      </div>
   
    <div className='col text-white'>
    <p>0</p>
      </div>
   

      </div>
    </div>
   

    </>
  )
}

export default CartWidged