import { Route, Routes } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemsListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';



function App() {
  
  return (
    <>

    <NavBar/>
     <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1>Error, NOT FOUND</h1>}/>
     </Routes>
    <Footer/>


     
    </>
  )
}

export default App
