import React from 'react'
import './Cart.css'
import NavBarWoutMenu from '../../components/navbar/NavBarWoutMenu'
import { HashLink } from 'react-router-hash-link'
const Cart = () => {
  return (
    <div>
      <NavBarWoutMenu />
      <div className='mmt__cart-body'>

        <div className='mmt__cart-container'>
          <div className='mmt__product-direct-link'>
            <span>
              <span><HashLink to={'/#home'}>Trang chu</HashLink></span>
              <span>/</span>
              <span><HashLink to={'/cart'}>Cart</HashLink></span>
            </span>
          </div>
          <div className='mmt__cart-list'>
            <div>a</div>
            
          </div>
          <div className='mmt__cart-control'>
            <p>a</p>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
