import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../Data';
import ItemList from '../ItemList/ItemList';
import Carousel from '../Carousel/Carousel';
import  {getDocs, collection, query, where} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig.js' ;
import './ItemListContainer.css'




const ItemListContainer = () => {

  //construir una lista de productos, lo ideal es hacerlo con un component


    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();



    

    useEffect(() => {

    const collectionRef = categoryId
    ? query(collection(db, 'Products'), where('category', '==', categoryId))
    : collection (db, 'Products')


  getDocs(collectionRef)
    .then(response => {
      const productsAdapted = response.docs.map(doc =>{
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProducts(productsAdapted)
    })
    .catch((error) => console.error(error));

}, [categoryId]);



// consumiendo desde la data interna

 /*    useEffect(()=>{

      const asyncFunction = categoryId ? getProductsByCategory : getProducts

      asyncFunction(categoryId)
          .then(response =>{
            setProducts(response)
          })
          .catch(error => {
            console.log(error)
          })
    }, [categoryId]) */

  


  return (
    <>
   <Carousel/>
   
   <div className='banner'>
   <h1>Nuestro productos</h1>
   </div>

   <ItemList products={products}/>
   
    </>
  )
}

export default ItemListContainer