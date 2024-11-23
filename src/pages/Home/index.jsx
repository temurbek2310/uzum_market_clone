import React from 'react'
import Slider from '../../components/Slider'
import Products from '../../components/Products'

const Home = ({addToCart}) => {
  return (
    <div>
      <Slider />
      <Products addToCart={addToCart}/>
    </div>
  )
}

export default Home