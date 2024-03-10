/*Modules before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import db from '../firebase'
import './App.css'
/*Local Modules */
import { Cart, Forum, Home, Product, Purchase, SignIn, SignUp } from './routes';
import { NotFound } from './containers';
/*Images */
import MathmysticPet from './assets/img/MathmysticPet.png';
import MathmysticLogo from './assets/img/MathmysticLogo.png'

const App = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="purchase" element={<Purchase />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="forum/:id" element={<Forum />} />

                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default withTranslation("translations")(App);
