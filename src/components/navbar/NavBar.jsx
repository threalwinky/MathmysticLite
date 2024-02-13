import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { CiUser } from "react-icons/ci";
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import VietnamLanguage from '../../assets/img/VietnamLanguage.png'
import EnglishLanguage from '../../assets/img/EnglishLanguage.webp'
import { FaUser } from "react-icons/fa";



const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const [isMenuShow, setIsMenuShow] = useState(false)
  const Menu = () => {
    return (
      <>
        <a href='#home'><p>Home</p></a>
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
        <a href='#document'><p>Profile</p></a>
        <a href='#home'><p>Cart</p></a>
        <a href='#introduction'><p>Bill</p></a>
        <a href='#introduction'><p>Chat</p></a>
        <a href='#store'><p>Setting</p></a>
        <a href='#contact'><p>Log Out</p></a>
      </>
    )
  }

  const UserPhoneMenu = () => {
    return (
      <>
        <p>
          <a href='#document' onClick={() => setIsMenuShow(!isMenuShow)}>
            {isMenuShow ? <GoTriangleUp /> : <GoTriangleDown />} User
          </a>
        </p>
      </>
    )
  }

  const MixedMenu = () => {
    return (
      <>
        <Menu />
        <UserPhoneMenu />
        {isMenuShow ? <UserMenu /> : ""}
      </>
    )
  }

  const [toggleMenu, setToggleMenu] = useState(false)
  const [userToggleMenu, setUserToggleMenu] = useState(false)
  const [userPhoneToggleMenu, setUserPhoneToggleMenu] = useState(false)
  const [language, setLanguage] = useState(false)

  return (
    <div>
      <div className={`mmt__navbar ${scrolled ? "scrolled" : ""}`}>
        <div className='mmt__navbar-links'>
          <div className='mmt__navbar-links_logo'>
            <img src={MathmysticLogo} alt='logo' />
            <h1>MATHMYSTIC</h1>
          </div>
          <div className='mmt__navbar-container_links'>
            <Menu />
          </div>
        </div>
        <div className='mmt__navbar-sign'>
          <img src={language ? VietnamLanguage : EnglishLanguage} onClick={() => setLanguage(!language)} />
          <FaUser onClick={() => setUserToggleMenu(!userToggleMenu)} style={{ fontSize: 25 }} />
        </div>
        <div className='mmt__navbar-user-menu'>
          {userToggleMenu && (
            <div className='mmt__navbar-user-menu_container scale-up-center'>
              <div className='mmt__navbar-user-menu_container-links'>
                <UserMenu />
              </div>
            </div>
          )}
        </div>
        <div className='mmt__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='black' size={26} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='black' size={26} onClick={() => setToggleMenu(true)} />}
        </div>
      </div>
      {toggleMenu && (
        <div className='mmt__navbar-menu_container scale-up-center'>
          <div className='mmt__navbar-menu_container-links'>
            <MixedMenu />
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
