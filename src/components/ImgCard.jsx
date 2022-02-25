import React from "react";

import ".././css/ImgCard.css";

const ImgCard = ({ twitterUserName, tweetImage }) => {
  return (
    <div className="imgContainer">
       <a href="twitter.com" style={{"background-image": tweetImage}}>
      <figure>
     
        <img src={tweetImage} alt="" />
        <p>Postado por: </p>
        <h3>@{twitterUserName}</h3>
      
        </figure>
          </a>
    </div>
  );
};

export default ImgCard;
