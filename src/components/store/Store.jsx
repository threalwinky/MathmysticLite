import React from 'react'
import PopUp from '../../containers/popup/PopUp'
import './Store.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';


import Store1 from '../../assets/img/Store/Store1.webp';

import Store2 from '../../assets/img/Store/Store2.webp';

import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';



const Store = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='mmt__store' id='store'>
      {/* onClick={() => PopUp('je;;')} */}
      <h1 >Store</h1>
      <div>
        <Carousel
          responsive={responsive}
          className='owl-carousel owl-theme mmt__store-skill-slider'
        >
          <Link to={'/product/bo-dung-cu-hoc-tap-hinh-hoc-cho-hoc-sinh-khiem-thi'}>
            <div className="item">
              <img src={Store1} alt="Image" />
              <h5><Trans>Bo dung cu hoc tap hinh hoc cho hoc sinh khiem thi</Trans></h5>
              {/* <h4><Trans>Triangle</Trans></h4> */}
              <h3><Trans>Het hang</Trans></h3>
            </div>
          </Link>

          <Link to={'/product/bo-dung-cu-hinh-hoc'}>
            <div className="item">
              <img src={Store2} alt="Image" />
              <h5><Trans>Bo dung cu hinh hoc</Trans></h5>
              {/* <h4><Trans>Triangle</Trans></h4> */}
              <h3><Trans>249,000₫</Trans></h3>
            </div>
          </Link>



        </Carousel>
      </div>
    </div>
  )
}

export default Store
