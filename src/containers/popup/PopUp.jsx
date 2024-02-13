import React, { useEffect } from 'react'
import './PopUp.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
const PopUp = (msg) => {


    toast.success(msg, {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true
    })
    
    
    return (
        <div>
          
        </div>
    );
}

export default PopUp
