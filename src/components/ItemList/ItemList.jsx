import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <>
    <div className='container'>
    {products.map(product => <Item key={product.id} {...product} /> )}
    </div>

    {/*     se le pasa por props las propiedades con {...product} */}    

    </>
  )}

export default ItemList