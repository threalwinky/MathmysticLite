import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { IoCloseSharp } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive'
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

import './NavBar.css'

var LogOut = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('userAvatar')
  localStorage.removeItem('userName')
  window.location.href = '/'
  localStorage.setItem('loggedin', '3')

}

function Menu() {

  const { closeMenu } = useContext(MenuContext);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })
  const HomeMenu = () => {
    return (
      <>
        <a href='/#home'><p><Trans>Home</Trans></p></a>
        <a href='/#introduction'><p>Introduction</p></a>
        <a href='/#about'><p>About</p></a>
        <a href='/#document'><p>Document</p></a>
        <a href='/#store'><p>Store</p></a>
        <a href='/#contact'><p>Contact</p></a>
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
        <a href='/' onClick={LogOut}><p>Log Out</p></a>
      </>
    )
  }

  const LogInMenu = () => {
    return (
      <>
        <a href='/login'><p>Log In</p></a>
        <a href='/signup'><p>Sign Up</p></a>
      </>
    )
  }

  const CheckLogInMenu = () => {
    const user = localStorage.getItem('user')
    console.log(user)
    return (
      <>
        {user != null ? <UserMenu /> : <LogInMenu />}
      </>
    )
  }

  return (
    <div className="mmt__menu">

      {((!isDesktopOrLaptop) || !(localStorage.getItem('open2') == '1')) ? ((localStorage.getItem('open') == '1') ?
        <CheckLogInMenu /> : <HomeMenu />) : <CheckLogInMenu />}

      <div>
        
        {((!isDesktopOrLaptop) || !(localStorage.getItem('open2') == '1')) ? ((localStorage.getItem('open') == '1') ?
        <div>
        <span>
      <img src={localStorage.getItem('userAvatar')} alt="" style={{ width: 50, margin: 10, borderRadius: 50 }} />
      {localStorage.getItem('userName')}
      </span>
      </div> : 
        <div>
     
        </div>
        ) : <div>
        <span>
      <img src={localStorage.getItem('userAvatar')} alt="" style={{ width: 50, margin: 10, borderRadius: 50 }} />
      {localStorage.getItem('userName')}</span>
      </div>}
        <button onClick={closeMenu}>
          <IoCloseSharp size={35} className="mmt__menu-close-button" />
        </button>
        
      </div>

    </div>
  );
}

export default Menu;
