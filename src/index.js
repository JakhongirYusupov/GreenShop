import React from 'react';
import ReactDOM from 'react-dom/client';
import "./utils/index.scss";
import './index.css';
import "./fonts/style.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
