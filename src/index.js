import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//css imports
import './css/index.css';

//components imports
import App from './components/App';
import NotFound from './components/NotFound.jsx';
import Login from './components/login';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/404" element={<NotFound/>}/>
      <Route path="*" element={<Navigate to="/404"/>}/>
      <Route path="/login" element={<Login /> } />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
