/*Module before File after */
import { useState, useEffect, React } from 'react'
import { Trans, withTranslation, useTranslation } from 'react-i18next';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { useMediaQuery } from 'react-responsive'
import NavBarWoutMenu from '../../components/navbar/NavBarWoutMenu'


import db from '../../../firebase'
import './Study.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import MathmysticLogo from '../../assets/img/MathmysticLogo.png'
import { Loading } from '../../containers';
import Footer from '../../components/footer/Footer';

const Study = () => {
    /* Necessary function */
    const [t, i18n] = useTranslation()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
    })
    const [loading, setLoading] = useState(0)
    useEffect(() => {
      setLoading(1)

    }, [])
    return (
        <div>
          {!loading ? <Loading/> : 
          
          <div>
            <NavBarWoutMenu/>
            <div className='study'>
              <input type="text" />
              <button></button>
            </div>
            <Footer></Footer>    
          </div>
          
          }
        </div>
    )
}

export default Study
