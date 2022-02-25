import React from "react";

import ".././css/ImgCard.css";

const ImgCard = ({ twitterUserName, tweetImage }) => {
  return (
    <div className="imgContainer">
     
      <figure>
     
        <img src={tweetImage} alt="" />
        <div className="subTitle">
        <p>Postado por: </p>
          <h3>@{twitterUserName}</h3>
        
          </div>
      <div className="boxshadow"></div>
        </figure>
           
    </div>
  );
};

export default ImgCard;
