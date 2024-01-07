import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Ckeckout/Checkout'
import Contact from './componentes/Contact/Contact'
import Footer from './componentes/Footer/Footer'
import { CarritoProvider } from './context/CarritoContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer title={"PRODUCCIÓN DE FOTOS"} />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer title={"PRODUCCIÓN DE FOTOS"} />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h2>Link inexistente, vuelva a intentarlo</h2>} />
          </Routes>
          <Footer />
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
