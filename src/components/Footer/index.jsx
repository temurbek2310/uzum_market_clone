import React from 'react'
import { FooterWrapper } from './style'
import { Link } from 'react-router-dom'
import { appleLogo, facebookLogo, instagramLogo, playLogo, telegramLogo, youtubeLogo } from '../../imports/imports'

const Footer = () => {
  return (
    <FooterWrapper>
      {/* FOOTER TOP START */}
      <div className='footer__top'>
        {/* FOOTER TOP LEFT START */}
        <div className="footer__top--left">
          <ul className='footer__top--left-list'>
            {/* #1 */}
            <li className='footer__top--left-list-item'>
              <h4 className='footer__top--left-list-item-heading'>Biz haqimizda</h4>
              <Link to={'/delivery-points'}>
                <p>Topshirish punktlari</p>
              </Link>
              <Link to={'/careers'}>
                <p>Vakansiyalar</p>
              </Link>
            </li>
            {/* #2 */}
            <li className='footer__top--left-list-item'>
              <h4 className='footer__top--left-list-item-heading'>Foydalanuvchilarga</h4>
              <button className='footer__top--left-btn '>
                Biz bog'lanish
              </button>
              <Link to={'/faq'}>
                <p>Savol-Javob</p>
              </Link>
            </li>
            {/* #3 */}
            <li className='footer__top--left-list-item'>
              <h4 className='footer__top--left-list-item-heading'>Tadbirkorlarga</h4>
              <a href='https://seller.uzum.uz/' target='_blank' >
                <p>Uzumda soting</p>
              </a>
              <a href='https://seller.uzum.uz/seller/signin' target='_blank'>
                <p>Sotuvchi kabenitiga kirish</p>
              </a>
            </li>
          </ul>
        </div>
        {/* FOOTER TOP LEFT END */}

        {/* FOOTER TOP RIGHT START */}
        <div className="footer__top--right">
          {/* RIGHT TOP START  */}
          <h4>Ilovani yuklab olish</h4>
          <div className="footer__top--right-top">
            <div className='footer__top--right-top-wrapper'>
              <a href="https://play.google.com/store/apps/details?id=uz.uzum.app" target='_blank'>
                {/* <img src={appleLogo} alt="AppleLogo" /> */}
                <span>AppStore</span>
              </a>
              <a href="https://apps.apple.com/ru/app/uzum-market-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056" target='_blank'>
                <img src={playLogo} alt="AppleLogo" />
                <span>Google Play</span>
              </a>
            </div>
          </div>
          {/* RIGHT TOP END */}
          {/* RIGHT BOTTOM START */}
          <div className='footer__top--right-bottom-wrapper'>
            <h4>Uzum ijtimoiy tarmoqlari</h4>
            <ul className='footer__top--right-bottom-wrapper-list'>
              {/* INSTAGRAM */}
              <li>
                <a href="https://www.instagram.com/uzum.market" target='_blank'>
                  <img src={instagramLogo} alt="Instagram Logo" />
                </a>
              </li>
              {/* TELEGRAM */}
              <li>
                <a href="https://t.me/uzum_market" target='_blank'>
                  <img src={telegramLogo} alt="Instagram Logo" />
                </a>
              </li>
              {/* FACEBOOK */}
              <li>
                <a href='https://www.facebook.com/uzummarket' target='_blank'>
                  <img src={facebookLogo} alt="Facebook Logo" />
                </a>
              </li>
              {/* YOUTUBE */}
              <li>
                <a href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA" target='_blank'>
                  <img src={youtubeLogo} alt="Youtube Logo" />
                </a>
              </li>
            </ul>
          </div>
          {/* RIGHT BOTTOM END */}
        </div>
        {/* FOOTER TOP RIGHT END */}
      </div>
      {/* FOOTER TOP END */}


      {/* FOOTER BOTTOM START */}
      <div className='footer__bottom'>
        {/* FOOTER BOTTOM LEFT START */}
        <hr />
        <div className="footer__bottom--left">
          <h4>
            <a href="https://legal.uzum.uz/privacy-policy-uz.html" target='_blank'>Maxfiylik kelishuvi</a>
          </h4>
          <h4>
            <a href="https://legal.uzum.uz/user-agreement-uz.html" target='_blank'>Foydalanuvchi kelishuvi</a>
          </h4>
        </div>
        {/* FOOTER BOTTOM LEFT END */}
        {/* FOOTER BOTTOM RIGHT START */}
        <div className="footer__bottom--right">
          <blockquote cite='https://uzum.uz/uz'>«{new Date().getFullYear()}© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</blockquote>
        </div>
        {/* FOOTER BOTTOM RIGHT END */}
      </div>
      {/* FOOTER BOTTOM END */}
    </FooterWrapper>
  )
}

export default Footer