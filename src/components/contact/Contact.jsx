/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'


import db from '../../../firebase'
import './Contact.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import ContactImage from "../../assets/img/ContactImage.webp";

const Contact = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })

    
    return (
        <div className='contact' id='contact'>
          <div className="contact-box">
            <div className="contact-box-img">
            <img src={ContactImage} alt="Contact Us" className='contact-image' />
            </div>
            <div className="contact-box-form">
              <h2><Trans>Contact</Trans></h2>
              <div className="contact-box-form-row">
              <input type="text" placeholder={t('Last Name')} />
              <input type="text" />
              </div>
              <div className="contact-box-form-row">
              <input type="text" />
              <input type="text" />
              </div>
              <div className="contact-box-form-textarea">
              <textarea type="text" rows={6}/>
              
              </div>
              <div className='contact-box-form-button'>
               <button><Trans>Send</Trans></button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Contact
