import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Checkout.css'
import cafe from '../../assets/cafe.png'
import { db } from "../../services/firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  writeBatch,
  Timestamp,
} from "firebase/firestore";

const Checkout = () => {

//tiempo de carga del 
const [loading, setLoading] = useState(false);

const [orderId, setOrderId] = useState('');
 
const {cart, total, clearCart} = useContext(CartContext);

async function createOrder({ name, phone, email }) {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
    
        },
        products: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      console.log("cart:", cart);
      const ids = cart.map((prod) => prod.id);
      console.log("ids:", ids);
      
      const productsRef = collection(db, "Products");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where("id", "in", ids))
      );
      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.Id === Number(doc.id));
        const prodQuantity = productAddedToCart?.quantity;
      
       
        if (stockDb >= prodQuantity) {
          
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
        
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      
      
      




      if (outOfStock.length === 0) {
        console.log("Committing batch update");
        await batch.commit();
        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder)
        setOrderId(orderAdded.id);
        clearCart();

      } else {
        console.error("Some items are out of stock");
      }
    } catch (error) {
      console.error("Hubo un problema creando la orden: ", error);
    } finally {
      setLoading(false);
    }
    
  }

if(loading){
    return(
      <>
       <div class="loading">
         <h1>Se está generando su orden... </h1>
      </div>
      </>
    )
}

if(orderId){
    return (
      <>
     <div class="containerCheck3">
      <div>
        <h1>El id de su orden es: {orderId}</h1>
      </div>
      <div>
        <h1>¡Gracias por su compra!</h1>
      </div>
      <div>
        <img src={cafe} alt="" />
      </div>
    </div>

      </>
    )
}

return (
   <>
    <h1 className='h1Check'>Checkout</h1>
    <CheckoutForm onConfirm={createOrder} />
   
   </>
  )
}

export default Checkout