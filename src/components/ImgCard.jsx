import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ".././css/ImgCard.css";

const ImgCard = ({ twitterUserName, tweetImage, tweetId }) => {
  const [modal, setModal] = useState("");

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {modal ? (
          <div className="modalContainer">
            <img src={tweetImage} alt="" />{" "}
            <button
              onClick={() => {
                setModal(!modal);
              }}
            >
              X
            </button>
            <div className="Modaldata" id="modaldata">
              <a
                href={`https://twitter.com/${twitterUserName}/status/${tweetId}`}
                target="_blank"
                rel="noreferrer"
                alt=""
              >
                <span>Postado por: </span>
                <h4>@{twitterUserName}</h4>
              </a>
            </div>
            <div className="boxshadow"></div>
          </div>
        ) : null}
        <div className="imgContainer">
          <section>
            <img
              src={tweetImage}
              alt=""
              onClick={() => {
                // window.scrollTo({ top: 900, behavior: "smooth" });
                //const modaldata = document.getElementById("modaldata");

                setModal(!modal);
              }}
            />
            <div className="subTitle">
              <a
                href={`https://twitter.com/${twitterUserName}/status/${tweetId}`}
                target="_blank"
                rel="noreferrer"
                alt=""
              >
                <p>Postado por: </p>
                <h3>@{twitterUserName}</h3>
              </a>
            </div>
            <div className="boxshadow"></div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default ImgCard;
