import React, { useEffect, useState } from 'react'
import { getProductById } from '../../Data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import  {getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig.js' ;

// se encarga de mostrar uno de los productos


const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {itemId} = useParams();

  const valor = parseInt(itemId);
  


  useEffect( () => {

    const docRef = doc(db, 'Products', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data();
        const productAdapted = {id: response.id, ...data}
        setProduct(productAdapted)
      })
      .catch(error => console.log("Error: ", error))
    
  }, [itemId]);




/* useEffect(()=>{
  getProductById(valor)// producto a buscar
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })

}, [valor]) */

 
  return (
    <>
      <ItemDetail {... product}/>
    </>
  )
}

export default ItemDetailContainer