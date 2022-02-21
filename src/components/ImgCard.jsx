import React from "react";
import { Link } from "react-router-dom";
import ".././css/ImgCard.css";

const test = {
  backgroundColor: "#fff",
};

const ImgCard = ({ twitterUser }) => {
  return (
    <div className="imgContainer" style={test}>
      <Link to="./">
        <p>Postado por: </p>
        <h3>@{twitterUser}</h3>
      </Link>
    </div>
  );
};

export default ImgCard;
