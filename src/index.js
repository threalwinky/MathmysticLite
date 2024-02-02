import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n';
import App from './App';
import "./App.css"
import "./fontawesome.js"
// append app to dom
ReactDOM.render(
  <I18nextProvider i18n={ i18n }><BrowserRouter><App /></BrowserRouter>,</I18nextProvider>,
  document.getElementById('root')
);