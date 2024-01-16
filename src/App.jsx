import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemsContainer from './componentes/ItemsContainer/ItemsContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Ckeckout/Checkout'
import Contact from './componentes/Contact/Contact'
import Login from './componentes/Login/Login'
import Footer from './componentes/Footer/Footer'
import { CartProvider } from './context/CartContext'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {

  const { t } = useTranslation(['global'])

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemsContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h2 className='not-found'>{t('notfound')} <Link to='/'>{t('notfound.home')}</Link></h2>} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
