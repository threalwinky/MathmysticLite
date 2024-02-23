import React from 'react'

import { NavBar, Header, Introduction, Store, About, Document, Footer, Contact } from "../../components";
import { Modal } from "../../containers";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Introduction></Introduction>
      <Store></Store>
      <About></About>
      <Document></Document>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  )
}

export default Home
