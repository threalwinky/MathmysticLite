import React, { useEffect, useState, useContext } from 'react'


import { Header, Introduction, NavBar, Footer, About, Document, Store, Contact } from './components'
import { PopUp, Loading, NotFound, Chatbot } from './containers'

import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MenuContext } from 'react-flexible-sliding-menu';

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
  }, [])
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div>



      {!loading ? <Loading /> :
        <div className='App'>
          <div className='gradient__bg'>
            <NavBar />
       
          </div>
          <Header />
          <button onClick={toggleMenu} >
                Toggle Menu
            </button>
          <Introduction />
          <About />
          <Document />
          <Store />
          <ToastContainer autoClose={5000} />
          {/* <Loading /> */}
          <Contact/>
          <Footer/>
          <Chatbot/>
        </div>
      }
    </div>
  )
}

export default App
