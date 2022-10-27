import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import  AuthProvider from './components/Login/AuthProvider';


import './index.module.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider>
    <BrowserRouter>

            <App />
          
          </BrowserRouter>
          </AuthProvider>
          
)

reportWebVitals();