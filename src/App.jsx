import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemsList/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      
      <NavBar/>
      <div>
      <ItemListContainer saludo={"Bienvenidos a Guadualito café"}/>
      <ItemCount stock={10} initial={1} onAdd={(quantity)=>{console.log(`Cantidad agregada ${quantity}`)}}/>
      </div>

    </>
  )
}

export default App
