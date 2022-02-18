import React from "react";
import "../css/nav.css";
import infoIcon from "../assets/img/icon-info-circle.svg";
import logIcon from "../assets/img/icon-user-alt.svg";
import { Link } from "react-router-dom";

export default function Navbar({buttons}) {

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
            {
            buttons.map(button => {
            
              let buttonColor = {
                "backgroundColor": button.backgroundColor,
                "color": button.textColor,
              }

                return (
                  <Link key={button.route} to={button.route}>
                    <button className="aboutBtn" style={buttonColor}>
                      {" "}
                      <img src={button.icon} alt="info-icon" /> {button.title}
                    </button>
                  </Link>
                )
              })
            }
          </div>
        </nav>
      </div>
    </>
  )
    // <>
    //   <div className="navWrapper">
    //     <nav className="navHeader">
    //       <div className="navTitle">
    //         <Link to="/">
    //           {" "}
    //           <h2>
    //             hashtag<span>finder</span>
    //           </h2>
    //         </Link>
    //       </div>
    //       <div className="navMenu">

    //       </div>
    //     </nav>
    //   </div>
    // </>
}
