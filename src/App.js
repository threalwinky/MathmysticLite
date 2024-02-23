import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { translate, Trans, withTranslation } from 'react-i18next';

import { NavBar } from './components';
import { Home } from './routes'
import './App.css'
import Test from './routes/test/Test';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
        
      </BrowserRouter>

    </div>
  )
}

export default withTranslation("translations")(App);