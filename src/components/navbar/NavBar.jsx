import React, { useEffect, useState, useContext } from 'react'
import './NavBar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { CiUser } from "react-icons/ci";
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import VietnamLanguage from '../../assets/img/VietnamLanguage.png'
import EnglishLanguage from '../../assets/img/EnglishLanguage.webp'
import { FaUser } from "react-icons/fa";
import { MenuContext } from "react-flexible-sliding-menu";
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {
  // const { tM } = useContext(MenuContext);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })
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
  const { toggleMenu } = useContext(MenuContext);
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
          <FaUser onClick={() => {localStorage.setItem('open', '1');toggleMenu();} } style={{ fontSize: 35 }} className='mmt__navbar-sign_user' />
          {!isDesktopOrLaptop ? <RiMenu3Line onClick={() => {localStorage.setItem('open', '2');toggleMenu();}} style={{ fontSize: 35 }}  className='mmt__navbar-sign_user'></RiMenu3Line> : ""}
        </div>

      </div>
    </div>
  )
}

export default NavBar
