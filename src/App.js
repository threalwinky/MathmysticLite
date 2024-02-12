import React, { useEffect, useState } from 'react'


import { Header, Introduction, NavBar, Footer, About, Document, Store } from './components'
import { PopUp } from './containers'

import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {   
  


  return (
    <div>
      
      <div className='gradient__bg'>
        <NavBar />
      </div>
      <Header />
      <Introduction />
      <About />
      <Document />
      <Store />
      <ToastContainer/>
    </div>
  )
}

export default App
