import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import './NavBar.css'
import { IoCloseSharp } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive'
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
function Menu() {

 

  const { closeMenu } = useContext(MenuContext);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })
  // console.log(localStorage.getItem('open'))
  const Menu1 = () => {
    return (
      <>
        <a href='#home'><p><Trans>Home</Trans></p></a>
        <a href='#introduction'><p>Introduction</p></a>
        <a href='#about'><p>About</p></a>
        <a href='#document'><p>Document</p></a>
        <a href='#store'><p>Store</p></a>
        <a href='#contact'><p>Contact</p></a>
      </>
    )
  }
  const UserMenu = () => {
    return (
      <>
        <a href='/profile'><p>Profile</p></a>
        <a href='/cart'><p>Cart</p></a>
        <a href='/bill'><p>Bill</p></a>
        <a href='/chat'><p>Chat</p></a>
        <a href='/setting'><p>Setting</p></a>
        <a href='/logout'><p>Log Out</p></a>
      </>
    )
  }

  return (
    <div className="mmt__menu">
      {/* <h1>Menu</h1> */}
      {/* <div className="mmt__menu-content"> */}

        { !isDesktopOrLaptop ? ((localStorage.getItem('open') == '1') ? <UserMenu /> : <Menu1></Menu1>) : <UserMenu />}

        
      {/* </div> */}

      <button onClick={closeMenu}>
        <IoCloseSharp size={35} className="mmt__menu-close-button" />
      </button>
    </div>
  );
}

export default Menu;
