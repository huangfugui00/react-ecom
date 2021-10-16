import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './assests/css/index.css'
import './assests/css/main.css'
import './assests/css/util.css'
import './assests/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './assests/fonts/iconic/css/material-design-iconic-font.min.css'
import './assests/fonts/linearicons-v1.0.0/icon-font.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
