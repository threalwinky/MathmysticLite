import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import './Home.css'
import { Header, Introduction, NavBar, Footer, About, Document, Store, Contact } from '../../components';
import { PopUp, Loading, NotFound, Chatbot } from '../../containers'

const Home = () => {
    return (
        <div>
            <div className='App'>
                <div className='gradient__bg'>
                    <NavBar />
                </div>
                <Header />
                <Introduction />
                <About />
                <Document />
                <Store />
                <Contact />
                <Footer />
                <Chatbot />
            </div>
        </div>
    )
}

export default Home
