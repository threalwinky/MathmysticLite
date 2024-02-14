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


const MainProduct = ({ productInfo }) => {
  const [zoom, setZoom] = useState(false)

  const [mainImg, setMainImg] = useState(productInfo.imgUrl[0])

  const [mainImgIndex, setMainImgIndex] = useState(0)
  const [productCount, setProductCount] = useState(1)
  return (
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
        <h6 className='price'>{productInfo.price}</h6>
        <div className='sub'>
          <div className='content'>
            <button disabled={productInfo.available == "0" || productCount == 1} onClick={() => setProductCount(productCount - 1)}>-</button>
            <span>{productCount}</span>
            <button disabled={productInfo.available == "0"} onClick={() => setProductCount(productCount + 1)}>+</button>
          </div>
          <button disabled={productInfo.available == "0"}>{productInfo.available == "0" ? "Het hang" : "Add to cart"}</button>
        </div>
      </div>
    </div>
  )
}

export default MainProduct
