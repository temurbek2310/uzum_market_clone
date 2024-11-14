import React from 'react'
import { HeaderTop, HeaderMid, Navbar } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
  let location = ["Asaka"]
  return (
    <header>

      {/* HEADER TOP START */}
      <HeaderTop>
        <div className="container header__top--inner">

          {/* HEADER TOP LEFT START */}
          <div className='header__top--left'>
            <button className='header__top--left-btn'>
              <i className='fa-solid fa-location-dot'></i>
              <p className='header__top--left-description'>
                Shahar: <span>{location[0]}</span>
              </p>
            </button>
            <div className='header__top--left-inner'>
              <Link to={'/delivery-points'}>Topshirish punktlari</Link>
            </div>

            {/* HEADER TOP LEFT END */}
          </div>

          {/* HEADER TOP RIGHT START */}

          <div className='header_top--right'>
            <a className='header_top--right-link' href="https://seller.uzum.uz/" target="_blank">Uzumda soting</a>
            <Link to={'/faq'}>Savol-javoblar</Link>
            <Link to={'/orders'}>Buyurtmalarim</Link>

            {/* LANGUAGES  START */}
              <form>
                <select name="lang">
                  <option value="uzb" defaultChecked>O'zbekcha</option>
                  <option value="rus">Ruscha</option>
                </select>
              </form>
            {/* LANGUAGES END */}
          </div>

          {/* HEADER TOP RIGHT END */}

        </div>
      </HeaderTop>
      {/* HEADER TOP END */}
      <div className="container">
        <HeaderMid>HeaderMid</HeaderMid>
        <Navbar>Navbar</Navbar>
      </div>
    </header>
  )
}

export default Header