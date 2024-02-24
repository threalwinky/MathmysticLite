import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { translate, Trans, withTranslation } from 'react-i18next';

import { NavBar } from './components';
import { Home, SignIn, SignUp } from './routes'
import './App.css'
import Test from './routes/test/Test';
import { Modal } from './containers';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/modal" element={<Modal/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
        
      </BrowserRouter>

    </div>
  )
}

export default withTranslation("translations")(App);