import React from 'react'
import { ProductWrapper } from './style'

const Product = ({ item, addToCart }) => {
  const {
    image,
    title,
    imageSub,
    rating,
    ratedVoice,
    monthlyPayment,
    oldprice,
    price
  } = item

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  return (
    <ProductWrapper>
      <div className='product__top'>
        <img className='product__top--img' src={image} alt={title} />
        <span className='product__top--sub'>{imageSub}</span>
        <button className='product__top--btn'>
          <i className='fa-regular fa-heart'></i>
        </button>
      </div>
      <div className='product__bottom'>
        <h5 className='product__bottom--heading'>{title}</h5>
        <div className='product__bottom--rating'>
          <p><i className='fa-solid fa-star'></i> {rating} <span>({ratedVoice} sharh)</span></p>
        </div>
        <p className='product__bottom--monthly-payment'>{monthlyPayment} so'm/oyiga</p>
        <del className='product__bottom--oldPrice'>{formatNumber(oldprice)} so'm</del>
        <h6 className='product__bottom--price'>{formatNumber(price)} so'm</h6>
        <button className='product__bottom--btn' onClick={() => addToCart(item)} >
          <i className='fa-solid fa-cart-plus'></i>
        </button>
      </div>
    </ProductWrapper>
  )
}

export default Product