import React from 'react'
import PopUp from '../../containers/popup/PopUp'
import './Store.css'
const Store = () => {
  return (
    <div className='mmt__store' id='store'>
      <h1 onClick={PopUp}>Store</h1>
      {/* <PopUp></PopUp> */}
    </div>
  )
}

export default Store
