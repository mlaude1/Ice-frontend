import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bulma/css/bulma.min.css';
import Footer from './components/Footer';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
      <Footer />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
