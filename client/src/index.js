import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { Routing } from './components/Routing';
import $ from 'jquery'; 
import  Napster  from './napster.min.js';
import './App.css';
// const script = document.createElement('script')

// script.type = 'text/javascript'
// script.src = './napster.min.js'
// script.id = 'napster'
// script.async = true
// document.head.appendChild(script)
// Napster.init({
//   consumerKey: 'api_key', // application key of your application
//   isHTML5Compatible: true // (boolean) true if browser supports HTML5 player
//   // false, flash player will be used instead)
// });
// Napster.player.on('ready', function (e) {
//   Napster.member.set({ accessToken: 'oauth access token' }); // If not set earlier
//   Napster.player.auth();
// });

console.log('asdf')

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routing />
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
