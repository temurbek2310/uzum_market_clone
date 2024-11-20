import React, { useState } from 'react';
import { HeaderTop, HeaderMid, Navbar } from "./style";
import { Link } from 'react-router-dom';
import NavbarModal from '../NavbarModal';
import { Logo, NavbarImage, ElectronicsImage, MachineImage, ClothesImage, ShoesImage, AccersoriesImage, MakeupImage } from "../../imports/imports";


export let navbarItems = [
  {

    id: 1,
    title: "Yozgi savdo",
    link: "category/1",
    image: NavbarImage,
  },
  {
    id: 2,
    title: "Uyda salqinlik",
    link: "category/2",
    image: NavbarImage,
  },
  {
    id: 3,
    title: "Hovuzlar",
    link: "category/3",
    image: NavbarImage,
  },
  {
    id: 4,
    title: "Hammasi avto uchun",
    link: "category/4",
    image: NavbarImage,
  },
  {
    id: 5,
    title: "Elektronika ",
    link: "category/5",
    image: ElectronicsImage,
  },
  {
    id: 6,
    title: "Maishiy texnika ",
    link: "category/6",
    image: MachineImage,
  },
  {
    id: 7,
    title: "Kiyim ",
    link: "category/7",
    image: ClothesImage,
  },
  {
    id: 8,
    title: " Poyabzallar ",
    link: "category/8",
    image: ShoesImage,
  },
  {
    id: 9,
    title: " Aksessuarlar ",
    link: "category/9",
    image: AccersoriesImage,
  },
  {
    id: 10,
    title: "  Goʻzallik va parvarish ",
    link: "category/10",
    image: MakeupImage,
  },
]

const Header = ({ length }) => {
  let location = ["Asaka"];
  const [openModal, setOpenModal] = useState(false);

  function handleClick() {
    setOpenModal(!openModal)
  }

  return (
    <header>

      {/* HEADER TOP START */}
      <HeaderTop>
        <div className="container header__top--inner">
          {/* HEADER TOP LEFT START */}
          <div className='header__top--left'>
            <button className='header__top--left-btn'>
              <i className="fa-solid fa-location-dot"></i>
              <p className='header__top--left-description'>Shahar: <span> {location[0]}</span></p>
            </button>

            <div className="header__top--left-inner">
              <Link to={"/delivery-point"}>Topshirish punktlari</Link>
            </div>
          </div>
          {/* HEADER TOP LEFT START */}


          {/* HEADER TOP RIGHT START */}
          <div className='header__top--right'>
            <a className='header__top--right-link' target='_blank' href="https://seller.uzum.uz/?utm_source=uzum&utm_medium=web&utm_campaign=header_link">
              Uzumda soting
            </a>
            <Link to={"/faq"}>Savol-javoblar</Link>
            <Link to={"/orders"}>Buyurtmalarim</Link>

            {/* LANGUAGE  START */}
            <form>
              <select value="language">
                <option name="uzb" id="uzb">O'zbekcha</option>
                <option name="rus" id="rus">Ruscha</option>
              </select>
            </form>
            {/* LANGUAGE END*/}
          </div>
          {/* HEADER TOP RIGHT END */}
        </div>
      </HeaderTop>
      {/* HEADER TOP END */}



      {/* HEADER MID START */}
      <HeaderMid>
        <div className="container header__mid-wrapper">
          {/* HEADER MID LEFT  START*/}
          <div className='header__mid--left'>
            {/* LOGO  START */}
            <Link className='header__mid--left-logo' to={"/"}>
              <img src={Logo} alt="logo" />
              {/* LOGO END */}
            </Link>
          </div>
          {/* HEADER MID LEFT  END*/}

          {/* HEADER MID CENTER  START */}
          <div className="header__mid--center">

            {/* CATALOG BTN START */}
            <button onClick={handleClick}>
              {openModal ? <i className="fa-solid fa-close"></i> : <i className="fa-solid fa-bars"></i>}
              <span>Katalog</span>
            </button>
            {/* CATALOG BTN START */}



            {/* SEARCH PLACE  START*/}
            <form>
              <input type="search" placeholder='Mahsulotlar va turkumlar izlash' />
              <i class="fa-solid fa-magnifying-glass"></i>
            </form>
            {/* SEARCH PLACE END */}

          </div>
          {/* HEADER MID CENTER END */}


          {/* HEADER RIGHT START */}
          <div className="header__mid--right">
            <ul className='header__mid--right-list'>
              {/* #1 */}
              <li className='header__mid--right-item'>
                <Link to={"/"}>
                  <i class="fa-regular fa-user"></i>
                  <span>Kirish</span>
                </Link>
              </li>

              {/* #2 */}
              <li className='header__mid--right-item'>
                <Link to={"/favorite"}>
                  <i class="fa-regular fa-heart"></i>
                  <span>Saralanganlar</span>
                </Link>
              </li>


              {/* #3 */}
              <li className='header__mid--right-item'>
                <Link to={"/cart"}>
                  <i class="fa-solid fa-bag-shopping"></i>
                  <div className='header__mid--right--item-wrapper'>
                    <span className='cart--title'>Savat</span>
                    <span className='cart--quantity'>{length}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* HEADER RIGHT END */}
          {/*  RIGHT ICONS */}
        </div>
      </HeaderMid>
      {/* HEADER MID END */}

      <Navbar>
        <div className="container">
          <ol className='navbar__list'>
            {
              navbarItems.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={item.link}>
                      <img src={item.image} alt={item.title} width={"24px"} height={"24px"} />
                      <h5>{item.title}</h5>
                    </Link>
                  </li>
                )
              })
            }

            <li>
              <button onClick={handleClick} className='navbar__list--item-btn'>
                <span>Yana</span>
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </li>
          </ol>
        </div>

        {openModal ? <NavbarModal /> : ""}
      </Navbar>
    </header>
  )
}


export default Header                                           