import React, { useState } from 'react'
import Popup from './Popup';
import './Test.css'
const Test = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <div className="App">
      <h1>React Popup Animate</h1>
      <button onClick={setIsOpenPopup.bind(this, true)}>Open Popup</button>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
      
    </div>
  );
}

export default Test
