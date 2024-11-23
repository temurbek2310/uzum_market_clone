import React, { useState } from 'react'
import Product from '../Product'
import { popularProducts } from '../../db.json'
import { ProductsWrapper } from './style'

const Products = ({addToCart}) => {
  const [product, setProduct] = useState(popularProducts)
  return (
    <div>
      <h2 className='products__heading'>Arzon narxlar</h2>
      <ProductsWrapper>
        {
          product.map((item) => {
            return (

              <Product addToCart={addToCart} key={item.id} item={item} />

            )
          })
        }
      </ProductsWrapper>

    </div>
  )
}

export default Products