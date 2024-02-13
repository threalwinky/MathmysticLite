import React from 'react'
import './Loading.css'
import { Audio, TailSpin } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className='mmt__loading'>
      <TailSpin
        visible={true}
        height="300"
        width="300"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        className=""
      />
    </div>
  )
}

export default Loading
