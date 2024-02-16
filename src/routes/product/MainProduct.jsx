import React from 'react'
import 'react-medium-image-zoom/dist/styles.css'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { translate, Trans, withTranslation } from 'react-i18next'
import Zoom from 'react-medium-image-zoom'
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

import MathmysticPet from '../../assets/img/MathmysticPet.png'
import './MainProduct.css'
import { Timestamp, addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import db from '../../firebase'
import { Loading, PopUp } from '../../containers';
import { toast } from 'react-toastify';

const MainProduct = ({ productInfo }) => {
  const [zoom, setZoom] = useState(false)

  const [mainImg, setMainImg] = useState(productInfo.imgUrl[0])

  const [mainImgIndex, setMainImgIndex] = useState(0)
  const [productCount, setProductCount] = useState(1)
  const [foundUser, setFoundUser] = useState([])
  const [loading, setLoading] = useState(0)
  useEffect(() => {

    getDocs(collection(db, "account"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const foundUser2 = (newData.find(x => x.email == localStorage.getItem('user')))
        setFoundUser(foundUser2)
        console.log(foundUser2)
        setLoading(1)
      })

  }, [])

  const addProductToCart = () => {
    if (localStorage.getItem('user') == null) {
      PopUp('Vui long dang nhap de dat hang')
    }
    else {
      addDoc(collection(db, "cart"), {
        productCount,
        product : productInfo,
        createdBy : foundUser,
        createdAt : Timestamp.now().seconds
      });
    }
  }

  return (
    <div>
      {!loading ? <Loading /> :


        <div className='mmt__product' id='home'>
          <div className='mmt__product-direct-link'>
            <span>
              <span><HashLink to={'/#home'}>Trang chu</HashLink></span>
              <span>/</span>
              <span><HashLink to={'/#contact'}>Store</HashLink></span><span>/</span>
              <span>{productInfo.name}</span>
            </span>

          </div>
          <div className='mmt__product-img'>
            {/* {mainImgIndex} */}
            <img src={mainImg} alt='' className='main' />
            <div className='sub'>
              {productInfo.imgUrl.map((img, index) => (
                <div key={index}>
                  <img src={img} className={index == mainImgIndex ? "choose" : ""} onClick={() => { setMainImg(img); setMainImgIndex(index) }} />
                </div>
              ))}
            </div>
          </div>
          <div className='mmt__product-content'>
            <div className='main'>
              <span>{productInfo.description}</span>
              <h1>{productInfo.name}</h1>
            </div>
            <p className='intro'>
              {productInfo.about.map((img, index) => (
                <div key={index}>
                  <li>{img}</li>
                </div>
              ))}
            </p>
            <h6 className='price'>{productInfo.price}₫</h6>
            <div className='sub'>
              <div className='content'>
                <button disabled={productInfo.available == "0" || productCount == 1} onClick={() => setProductCount(productCount - 1)}>-</button>
                <span>{productCount}</span>
                <button disabled={productInfo.available == "0"} onClick={() => setProductCount(productCount + 1)}>+</button>
              </div>
              <button onClick={addProductToCart} disabled={productInfo.available == "0"}>{productInfo.available == "0" ? "Het hang" : "Add to cart"}</button>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default MainProduct
