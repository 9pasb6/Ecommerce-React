import { Route, Routes } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemsListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Error from './components/Error/Error';



function App() {
  
  return (
    <>

    

<CartProvider>
<NavBar/>
     <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/checkout' element={<Checkout/>}   />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<Error/>}/>
     </Routes>
    <Footer/>
</CartProvider>
     
    </>
  )
}

export default App
