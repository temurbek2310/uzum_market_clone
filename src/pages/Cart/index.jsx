import React, { useState } from 'react'
import { CartWrapper } from './style';
import Products from '../../components/Products';

const Cart = ({ item, length, addToCart, setCart }) => {
  const [count, setCount] = useState(1);
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDay() + 1);
  
  const revomeItem = (id)=>{
    setCart(item.filter((item)=> item.id !== id))
  }
  
  return (
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
                <label htmlFor="selectAll"></label>
                <input type="checkbox" id='selectAll' name='selectAll' />
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
              <div className="top">
                <span>Uzum market omborida</span>
                <h5>{tomorrow.toDateString()} orasida yetkazamiz</h5>
              </div>

              <div className="bottom">
                <input type="checkbox" />
                <div>
                  {item.map((item) => {
                    return (
                      <div className='bottom__wrapper'>
                        <div className='image'>
                          <img src={item.image} alt={item.title} />
                        </div>

                        <div>
                          <div className='bottom__wrapper--top'>
                            <h6>{item.title}</h6>
                            <button onClick={()=> revomeItem(item.id)}>
                              <i className='fa-solid fa-trash'></i>
                              <span>Yo'q qilish</span>
                            </button>
                          </div>

                          <div className='bottom__wrapper--bottom'>
                            <p><span>Sotuvchi:</span>DYNAMIC SYSTEM DISTRIBUTION</p>

                            <div>
                              <button onClick={() => setCount(count - 1)}>-</button>
                              <button>{count}</button>
                              <button onClick={() => setCount(count + 1)}>+</button>
                            </div>

                            <div>
                              <h3>{item.price}</h3>
                              <span>{item.oldprice}</span>
                            </div>
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
                <span>Mahsulotlar {length}</span>
                <span>9 800 000 so'm</span>
              </p>

              <button>Yetkazib berish sanasi {tomorrow.toDateString()}</button>

              <div>
                <p>Jami:</p>
                <h6>6 998 000 so'm</h6>
                <span>Tejavingiz: 2 802 000 so'm</span>
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
  )
}

export default Cart