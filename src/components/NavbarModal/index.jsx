import React from 'react'
import { NavbarMenu } from './style';
import { navbarItems } from '../../imports/data/navbarItems';
import { Link } from 'react-router-dom';

const NavbarModal = () => {
  return (
    <NavbarMenu>
        <div className="container">
            {/* MODAL LEFT STARt */}
            <div className='navbar__modal--left'>
                <ol className='navbar__modal--left-list'>
                    {navbarItems.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link to={item.link}>
                                       <div className='navbar__modal--left-link--inner'>
                                            <img src={item.image} alt={item.title} width={"28px"} height={"28px"}  />
                                            <h5>{item.title}</h5>
                                       </div>
                                       <i class="fa-solid fa-arrow-right fa-fade"></i>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
            {/* MODAL LEFT END */}
        </div>
    </NavbarMenu>
  )
}

export default NavbarModal;