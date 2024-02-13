import React, { useEffect, useState, useContext } from 'react'
import { Header, Introduction, NavBar, Footer, About, Document, Store, Contact } from './components'
import { PopUp, Loading, NotFound, Chatbot } from './containers'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MenuContext } from 'react-flexible-sliding-menu';
import { translate, Trans, withTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
  }, [])
  const { toggleMenu } = useContext(MenuContext);

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              {!loading ? <Loading /> :
                <div className='App'>
                  <div className='gradient__bg'>
                    <NavBar />
                  </div>
                  <Header />
                  <Introduction />
                  <About />
                  <Document />
                  <Store />
                  <ToastContainer autoClose={5000} />
                  <Contact />
                  <Footer />
                  <Chatbot />
                </div>
              }
            </div>
          }>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default withTranslation("translations")(App);
