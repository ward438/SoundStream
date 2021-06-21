import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { Routing } from './components/Routing';


ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routing/>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
