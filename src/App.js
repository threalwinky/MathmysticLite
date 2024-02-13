import React, { useEffect, useState } from 'react'


import { Header, Introduction, NavBar, Footer, About, Document, Store } from './components'
import { PopUp, Loading, NotFound } from './containers'

import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <div>
      {!loading ? <Loading /> :
        <div>
          <Loading />
          <div className='gradient__bg'>
            <NavBar />
            
          </div>
          <Header />
          <Introduction />
          <About />
          <Document />
          <Store />
          <ToastContainer />
          <Loading />
        </div>
      }
    </div>
  )
}

export default App
