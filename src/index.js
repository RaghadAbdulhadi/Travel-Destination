import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import the App.js file 
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//To make a default route for my app add a basename to the BrowserRouter --> <BrowserRouter basename = "/anypage">

//To refresh the page when you go to any other route, it rerednders it --> <BrowserRouter forceRefresh>

