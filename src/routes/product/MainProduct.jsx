import React from 'react'
import './MainProduct.css'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { translate, Trans, withTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const MainProduct = ({ productInfo }) => {

  console.log(productInfo)
  const [zoom, setZoom] = useState(false)
  // productInfo.imgUrl.push(productInfo.imgUrl[0])
  // productInfo.imgUrl.push(productInfo.imgUrl[0])
  return (
    <div className='mmt__product' id='home'>

      <div className='mmt__product-img'>
        <img src={productInfo.imgUrl[0]} alt='' className='main' />
        <div className='sub'>
          {productInfo.imgUrl.map((img, index) => (
            <div key={index}>
              <img src={img} />
            </div>
          ))}
        </div>

        
      </div>
      <div className='mmt__product-content'>
          <div className='main'>
            <span>Special</span>
            <h1>Nike Invincible 3</h1>
          </div>
          <p className='intro'>Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible</p>
          <h6 className='price'>$ 199.00</h6>
          <div className='sub'>
            <div className='content'>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}

export default MainProduct

{/* <Zoom>
        <img src={productInfo.imgUrl[2]}  />
        </Zoom>
        {productInfo.name}
        {productInfo.price}
        {productInfo.available} */}
{/* <h2>{productInfo.involve}</h2>
        {productInfo.imgUrl.forEach((ea, index) => {
         <img src={productInfo.imgUrl[2]}></img>  */}
{/* // <h2 key={index}>{ea}</h2> */ }
{/* {productInfo.imgUrl.map((img, index) => (
          <div key={index}>
            <img src={img} />
          </div>
        ))} */}