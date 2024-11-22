import React, { useState } from 'react'
import Product from '../Product'
import { popularProducts } from '../../../public/db.json'

const Products = () => {
  const [product, setProduct] = useState(popularProducts)
  return (
    <div>

      {
        product.map((item) => {
          return (

            <Product key={item.id} item={item}/>

          )
      })
      }

    </div>
  )
}

export default Products