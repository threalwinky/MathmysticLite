import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import MenuProvider from "react-flexible-sliding-menu";
import Menu from "./components/navbar/Menu";
ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuProvider MenuComponent={Menu} direction='right' width='200px'>
     <App />
  </MenuProvider>
);
