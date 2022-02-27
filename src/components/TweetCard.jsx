import React from "react";
import "./../css/TweetCard.css";
import { motion } from "framer-motion";

const tweetCard = ({ userImage, userName, tweetText, user, tweetId }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
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
          <a
            href={`https://twitter.com/${userName}/status/${tweetId}`}
            target="_blank"
            rel="noreferrer"
            alt=""
          >
            <span>ver mais no Twitter</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default tweetCard;
