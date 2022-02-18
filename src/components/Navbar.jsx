import React from "react";
import "../css/nav.css";
import infoIcon from "../assets/img/icon-info-circle.svg";
import logIcon from "../assets/img/icon-user-alt.svg";
import { Link } from "react-router-dom";

export default function Navbar({ aboutPage, logPage, homePage, buttonTitle, buttonIcon }) {
  return (
    <>
      <div className="navWrapper">
      <nav className="navHeader">
        <div className="navTitle">
          <Link to="/">
            {" "}
            <h2>
              hashtag<span>finder</span>
            </h2>
          </Link>
         </div>
    <div className="navMenu">
          
            {aboutPage && (<Link to={aboutPage}>

      <button className="aboutBtn">
            {" "}
            <img src={infoIcon} alt="info-icon" /> Sobre
          </button>

            </Link>)}
            

            {logPage && (<Link to={logPage}>
            <button className="loginBtn">
              {" "}
              <img src={logIcon} alt="icon-user" />
              {buttonTitle}
            </button>
            </Link>)}
            

            {homePage && (<Link to={homePage}>
      <button className="aboutBtn">
            {" "}
            <img src={buttonIcon} alt="info-icon" />Home
          </button>

            </Link>)}
       
       
     
        </div>
        </nav>
        </div>
    </>
  );
}
