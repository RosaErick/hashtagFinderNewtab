import React from "react";

import ".././css/ImgCard.css";

const ImgCard = ({ twitterUserName, tweetImage, tweetId }) => {
  return (
    <div className="imgContainer">
      <a
        href={`https://twitter.com/${twitterUserName}/status/${tweetId}`}
        target="_blank"
        rel="noreferrer"
        alt=""
      >
        <img src={tweetImage} alt="" />
        <div className="subTitle">
          <p>Postado por: </p>
          <h3>@{twitterUserName}</h3>
        </div>
        <div className="boxshadow"></div>
      </a>
    </div>
  );
};

export default ImgCard;
