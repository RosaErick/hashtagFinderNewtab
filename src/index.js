import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//css imports
import "./css/Global.css";
// import './css/index.css';

//pages and imports
import NotFound from './components/NotFound';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import List from './pages/list/List';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
