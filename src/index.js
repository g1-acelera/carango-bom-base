import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'fontsource-roboto';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);