import React from "react";
import "../css/nav.css";
import infoIcon from "../assets/img/icon-info-circle.svg";
import logIcon from "../assets/img/icon-user-alt.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav-wrapper">
      <nav className="nav-header">
        <div className="nav-title">
          <Link to="/">
            {" "}
            <h2>
              hashtag<span>finder</span>
            </h2>
          </Link>
        </div>

        <div className="nav-menu">
          <button className="about-btn">
            {" "}
            <img src={infoIcon} alt="info-icon" /> Sobre
          </button>
          <Link to="/login">
            <button className="login-btn">
              {" "}
              <img src={logIcon} alt="icon-user" />
              Login
            </button>
          </Link>
        </div>
        </nav>
        </div>
    </>
  );
}
