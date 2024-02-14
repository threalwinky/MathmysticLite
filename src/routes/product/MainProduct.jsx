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
  return (
    <div className='mmt__product' id='home'>
      <div className='mmt__product-content'>
        <Zoom>
        <img src={productInfo.imgUrl}  />
        </Zoom>
        
        {productInfo.name}
        {productInfo.price}
        {productInfo.available}
      </div>
    </div>
  )
}

export default MainProduct
