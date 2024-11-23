import React, { useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Faq from './pages/Faq'
import Orders from './pages/Orders'
import DeliveryPoints from './pages/DeliveryPoints'
import Favorite from './pages/Favorite'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }
  return (
    <>
      <Header length={cart.length}/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart item={cart}/>} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/delivery-points" element={<DeliveryPoints />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App