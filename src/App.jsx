import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Faq from './pages/Faq'
import Orders from './pages/Orders'
import DeliveryPoints from './pages/DeliveryPoints'
import Favorite from './pages/Favorite'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
        <div className='container'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/delivery-points" element={<DeliveryPoints />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
          <Footer />
        </div>  
    </>
  )
}

export default App