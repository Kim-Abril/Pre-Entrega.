import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
    <Header/>
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<p>Carrito</p>}/>
        </Routes>
      </main>
    <Footer/>
    </>
  )
}

export default App
