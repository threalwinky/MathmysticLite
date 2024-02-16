import React, { useEffect, useState } from 'react'
import './Cart.css'
import NavBarWoutMenu from '../../components/navbar/NavBarWoutMenu'
import { HashLink } from 'react-router-hash-link'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase'
import { Loading } from '../../containers'
import { Button } from 'react-bootstrap'
const Cart = () => {
  const [foundUser, setFoundUser] = useState([])
  const [foundProduct, setFoundProduct] = useState([])
  const [loading, setLoading] = useState(0)
  const fetchUser = async (e) => {
    await getDocs(collection(db, "account"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setFoundUser(newData.find((userId) => {
          return userId.email == localStorage.getItem('user')
        }))
        setLoading(1)
      })

    await getDocs(collection(db, "cart"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const newData2 = []
        newData.forEach(element => {
          if (element.createdBy.email == localStorage.getItem('user'))
            newData2.push(element)
        });
        console.log(newData2)
        setFoundProduct(newData2.sort(function (a, b) { return b.createdAt - a.createdAt }));
        setLoading(1)
      })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      {!loading ? <Loading /> :

        <div>
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

                  {/* {foundUser.name} */}

                  {foundProduct?.map((product, index) => (
                    <p key={index}>

                      <div className='mmt__productInCart-container'>
                        <input type="checkbox" />
                        <div className='mmt__productInCart-info'>
                          <img src={product.product.imgUrl[0]} alt="" />
                          <p>{product.product.name}</p>
                        </div>
                        <div className='mmt__productInCart-control'>
                          <div className='mmt__productInCart-count'>
                            <button size={10} >-</button>
                            {product.productCount}
                            <button size={10}>+</button>
                          </div>
                          <div className='mmt__productInCart-pricePerProduct'>
                            <p>gia tien 1 bo</p>
                            <p>{product.product.price}</p>
                          </div>
                          <div className='mmt__productInCart-totalPriceProduct'>
                            <p>tong gia tien</p>
                            <p>{product.product.price * product.productCount}</p>
                          </div>
                        </div>

                      </div>

                      {/* {product.product.imgUrl[0]}
                      {product.createdAt}
                      {product.product.name}
                      {product.product.price}
                      {product.productCount} */}
                    </p>

                  ))}

                </div>
                <div className='mmt__cart-control'>
                  <p>a</p>
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      }
    </div>
  )
}

export default Cart
