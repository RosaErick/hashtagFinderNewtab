import React from "react";
import "./../css/TweetCard.css";

const tweetCard = ({ userImage, userName, tweetText, user, tweetId }) => {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img src={userImage} alt="" />
      </div>
      <div className="cardContent">
        <div className="cardContentTitle">
          <h3>{userName}</h3>
          <p>@{user}</p>
        </div>
        <div>
          <p className="tweetText">{tweetText}</p>
        </div>
        <a href={`https://twitter.com/${userName}/status/${tweetId}`} target="_blank" rel="noreferrer" alt="">
          <span>ver mais no Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default tweetCard;
