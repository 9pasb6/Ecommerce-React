import React, { useEffect, useState } from 'react'
import { getProductById } from '../../Data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

// se encarga de mostrar uno de los productos


const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  const {itemId} = useParams();

  const valor = parseInt(itemId);
  
useEffect(()=>{
  getProductById(valor)// producto a buscar
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })

}, [valor])

 
  return (
    <>
      <ItemDetail {... product}/>
    </>
  )
}

export default ItemDetailContainer