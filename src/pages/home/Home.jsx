import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import React from "react";
import "../../css/Home.css";
import infoIcon from "../../assets/img/icon-info-circle.svg";
import logIcon from "../../assets/img/icon-user-alt.svg";
import TweetCard from "../../components/TweetCard";
import ImgCard from "../../components/ImgCard";
import { useState } from "react";

const Home = () => {
  const [imageActive, setActiveState] = useState("");
  const [colorMode, setColorState] = useState("");

  const toogleHandle = () =>
    setActiveState(!imageActive) || setColorState(!colorMode);

  return (
    <>
      <Navbar
        buttons={[
          {
            title: "Sobre",
            icon: infoIcon,
            route: "/about",
            textColor: "#0A1744",
            backgroundColor: "#72EFDB",
          },
          {
            title: "Login",
            icon: logIcon,
            route: "/login",
            textColor: "#FFF",
            backgroundColor: "#1E3E7B",
          },
        ]}
      />
      <Hero />
      <main className="mainHome">
        <h2>Exibindo os 10 resultados mais recentes para #Natureza</h2>
        <div className="mobileSelect">
          <button
            onClick={toogleHandle}
            className={colorMode ? "" : "buttonSelected"}
          >
            Tweets
          </button>
          <button
            onClick={toogleHandle}
            className={colorMode ? "buttonSelected" : ""}
          >
            Imagens
          </button>
        </div>
        <section className="mainGrid">
          <section className="gridLeftDesktop">
            <div className="imgBox">
              <ImgCard twitterUser="test" />
              <ImgCard twitterUser="test" />
            </div>
            <div className="imgBox">
              <ImgCard twitterUser="test" />
              <ImgCard twitterUser="test" />
            </div>
            <div className="imgBox">
              <ImgCard twitterUser="test" />
              <ImgCard twitterUser="test" />
            </div>
            <div className="imgBox">
              <ImgCard twitterUser="test" />
              <ImgCard twitterUser="test" />
            </div>
            <div className="imgBox">
              <ImgCard twitterUser="test" />
              <ImgCard twitterUser="test" />
            </div>
          </section>
          <section className="gridRightDesktop">
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
            <TweetCard
              userImage="https://github.com/torvalds.png"
              userName="UserName"
              tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
            />
          </section>

          {imageActive ? (
            <>
              <section className="gridLeft">
                <div className="imgBox">
                  <ImgCard twitterUser="test" />
                  <ImgCard twitterUser="test" />
                </div>
                <div className="imgBox">
                  <ImgCard twitterUser="test" />
                  <ImgCard twitterUser="test" />
                </div>
                <div className="imgBox">
                  <ImgCard twitterUser="test" />
                  <ImgCard twitterUser="test" />
                </div>
                <div className="imgBox">
                  <ImgCard twitterUser="test" />
                  <ImgCard twitterUser="test" />
                </div>
                <div className="imgBox">
                  <ImgCard twitterUser="test" />
                  <ImgCard twitterUser="test" />
                </div>
              </section>
            </>
          ) : (
            <>
              <section className="gridRight">
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
                <TweetCard
                  userImage="https://github.com/torvalds.png"
                  userName="UserName"
                  tweetText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt..."
                />
              </section>
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
