import React, { useState } from 'react'
import { CartWrapper } from './style';
import Products from '../../components/Products';
import { CartImage } from '../../imports/imports'
import { Link } from 'react-router-dom';

const Cart = ({ item, length, addToCart, setCart }) => {
  const [count, setCount] = useState(1);
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDay() + 1);

  const calculateCartTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const totalCartPrice = calculateCartTotal(item);

  const revomeItem = (id) => {
    setCart(item.filter((item) => item.id !== id))
  }

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      {
        length != 0 ? (
          <>
            <CartWrapper>
              <h2 className='cart__title'>Savatingiz, <span >{length} mahsulot</span></h2>

              <div className='cart__inner'>
                {/* LEFT START */}
                <div className="cart__inner--left">

                  {/* TOP START */}
                  <div className='cart__inner--top'>
                    {/* SELECT START */}
                    <div className='cart__inner--left--top'>
                      <input type="checkbox" id='selectAll' name='selectAll' />
                      <label htmlFor="selectAll"></label>
                      <span>Hammasini yechish</span>
                    </div>
                    {/* SELECT END */}

                    {/* DELIVERY START */}
                    <div className="cart__inner--right--topp">
                      <span>Yetkazib berishning eng yaqin sanasi:</span>
                      <button>{tomorrow.toDateString()}(Ertaga)</button>
                    </div>
                    {/* DELIVERY END */}
                  </div>
                  {/* TOP END */}

                  {/* BOTTOM START */}
                  <div className="cart__inner--bottom">
                    <hr />
                    <div className="bottom__top">
                      <span>Uzum market omborida</span>
                      <h5>{tomorrow.toDateString()} orasida yetkazamiz</h5>
                    </div>

                    <div className="bottom">
                      <div className='nothing'>
                        {item.map((item) => {
                          return (
                            <div className='bottom__wrapper'>
                              <input type="checkbox" id='selectOne' name='=selectOne' />
                              <label htmlFor="selectOne"></label>
                              <div className='image'>
                                <img src={item.image} alt={item.title} />
                              </div>

                              <div>
                                <div className='bottom__wrapper--top'>
                                  <h6>{item.title}</h6>
                                  <button onClick={() => revomeItem(item.id)}>
                                    <i className='fa-solid fa-trash'></i>
                                    <span>Yo'q qilish</span>
                                  </button>
                                </div>

                                <div className='bottom__wrapper--bottom'>
                                  <div className='seller__wrapper'><span>Sotuvchi:</span><Link to={'/seller/1'}>DYNAMIC SYSTEM DISTRIBUTION</Link></div>

                                  <div className='count'>
                                    <button className='plus' onClick={() => setCount(count - 1)}>-</button>
                                    <button className='quantity'>{count}</button>
                                    <button className='minus' onClick={() => setCount(count + 1)}>+</button>
                                  </div>

                                </div>
                                <div className='price'>
                                  <p>Uzum kartasi bilan toʻlov amalga oshirilganda:</p>
                                  <h3>{formatNumber(item.price)}</h3>
                                  <p className='oldPrice'>{formatNumber(item.oldprice)}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  {/* BOTTOM END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="cart__inner--right">
                  {/* RIGHT TOP START */}

                  <div className="cart__inner--right--top">
                    <h6>Buyurtmangiz</h6>
                    <p>
                      <span>Mahsulotlar ({length}):</span>
                      <span className='all'>{formatNumber(totalCartPrice)} so'm</span>
                    </p>

                    <button>Yetkazib berish sanasi {tomorrow.toDateString()}</button>

                    <div>
                      <p>Jami:</p>
                      <h6></h6>
                      <span>Tejovingiz: { } so'm</span>
                    </div>

                    <button>Rasmiylashtirishga o'tish</button>
                  </div>

                  {/* RIGHT TOP END */}



                  {/* RIGHT BOTTOM START */}
                  <div className="cart__inner--right--bottom">
                    <div>
                      <p>
                        Buyurtmalarni topshirish punktiga bepul yetkazib beramiz
                      </p>
                      <i className='fa-solid fa-question'></i>
                      <p>
                        <span>1 000 000 so'm</span>
                        <i className='fa-solid fa-house'></i>
                      </p>
                    </div>
                  </div>
                  {/* RIGHT BOTTOM END */}

                </div>
                {/* RIGHT END */}
              </div>
            </CartWrapper>
            <Products addToCart={addToCart} />
          </>
        ) : (
          <>
            <CartWrapper>
              <div className='empty'>
                <img className='empty__img' src={CartImage} alt="Cart Image" />
                <h1 className='empty__title'>Savatingiz hozircha bo'sh</h1>
                <p className='empty__text'>Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin</p>
                <button className='empty__btn'>
                  <Link to={'/'}>Bosh sahifa</Link>
                </button>
              </div>
            </CartWrapper>
            <Products addToCart={addToCart} />
          </>
        )
      }
    </>
  )
}

export default Cart