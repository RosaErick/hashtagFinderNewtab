import React from "react";
import "./../css/TweetCard.css";
import { Link } from "react-router-dom";

const tweetCard = ({ userImage, userName, tweetText }) => {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img src={userImage} alt="" />
      </div>

      <div className="cardContent">
        <div className="cardContentTitle">
          <h3>{userName}</h3>
          <p>@{userName}</p>
        </div>
        <div>
          <p className="tweetText">{tweetText}</p>
        </div>
        <Link to="/">
          <span>ver mais no Twitter</span>
        </Link>
      </div>
    </div>
  );
};

export default tweetCard;
