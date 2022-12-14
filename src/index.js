import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MainRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <MainRoutes />    
    </BrowserRouter>
    
  </React.StrictMode>
);
