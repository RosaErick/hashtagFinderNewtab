import React from "react";
import '../css/nav-footer.css';
import infoIcon from '../assets/img/icon-info-circle.svg';
import logIcon from '../assets/img/icon-user-alt.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav class="nav-header">
   
        <div class="nav-title">
          <h2>
            hashtag<span>finder</span>
          </h2>
        </div>

        <div class="nav-menu">
          <button> <img src={infoIcon} alt="info-icon" /> Sobre</button>
          <button> <img src={logIcon} alt="icon-user"/><Link to="/login">Login</Link></button>
          </div>
      
      </nav>
    </>
  );
}
