import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/hero.css";
import React from "react";
import "../../css/Home.css";
import infoIcon from "../../assets/img/icon-info-circle.svg";
import logIcon from "../../assets/img/icon-user-alt.svg";
import TweetCard from "../../components/TweetCard";
import ImgCard from "../../components/ImgCard";
import IconSearch from "../../assets/img/icon-search.svg";
import { useState, useEffect } from "react";
import { getTweets } from "../../api/getTweets";
import { motion } from "framer-motion";
import { postData } from "../../api/AirtablePOST";
import { FaArrowCircleUp } from "react-icons/fa";
import { getTweetImgs } from "../../api/getTweetImages";
import LoaderComponent from "../../components/Loader";
const Home = () => {
  const [imageActive, setActiveState] = useState("");
  const [colorMode, setColorState] = useState("");
  const [animationMode, setanimationMode] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchResponse, setSearchResponse] = useState("");
  const [titleTag, setTitleTag] = useState();
  const [moreRequest, setMoreRequest] = useState(10);
  const [resultsNumber, setResultsNumber] = useState(0);
  const [showScroll, setShowScroll] = useState(false);
  const [tweets, setTweets] = useState(null);
  const [tweetimgs, setTweetImgs] = useState(null);
  const [scrollTopButton, setTopButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const toogleHandle = () =>
    setActiveState(!imageActive) || setColorState(!colorMode);

  const asyncCall = async () => {
    const tweetcall = await getTweets(searchValue, moreRequest);
    const tweetImgs = await getTweetImgs(searchValue, moreRequest);

    if (!tweetcall.data) {
      setSearchResponse("Nenhum tweet foi achado, tente novamente... 😭");
    }
    const imgSet = tweetImgs.data.map((tweet) => {
      const user = tweetImgs.includes.users.find(
        (user) => tweet.author_id === user.id
      );
      const img = tweetImgs.includes.media.find(
        (img) => tweet.attachments.media_keys[0] === img.media_key
      );

      return {
        id: tweet.id,
        img: img.url,
        username: user.username,
        user: user.name,
      };
    });

    const tweetSet = tweetcall.data.map((tweet) => {
      const user = tweetcall.includes.users.find(
        (user) => tweet.author_id === user.id
      );

      return {
        id: tweet.id,
        text: tweet.text,
        username: user.username,
        user: user.name,
        photo: user.profile_image_url,
      };
    });

    setTweetImgs(imgSet);
    setTweets(tweetSet);
    setTitleTag(searchValue);
    setMoreRequest(moreRequest + 10);
  };

  useEffect(() => {
    if (searchValue) {
      asyncCall();
      return () => {
        if (tweets) {
        }

        setSearchResponse("");
        setSearchValue("");
      };
    }
  });

  function handleScroll() {
    if (tweets) {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setLoading(true);
        function fetchMoreData() {
          const newSearch = document.getElementById("input").value;
          setSearchValue(newSearch);

          setResultsNumber(resultsNumber + 5);

          return console.log(moreRequest);
        }
        setTimeout(() => setLoading(false), 2000);
        setTimeout(() => fetchMoreData(), 1500);
        setTimeout(() => setTopButton(true), 3000);
      }
    }
  }

  useEffect(() => {
    if (tweets) {
      const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
          setShowScroll(false);
        }
      };

      window.addEventListener("scroll", checkScrollTop);
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function handleValue(e) {
    if (e.keyCode === 13) {
      const asyncPost = async () => {
        await postData(e.target.value);
      };

      setSearchValue(
        e.target.value.replace(/[^a-zA-Z0-9_]/g, "").replace(" ", "")
      );

      setSearchResponse(<LoaderComponent />);
      setResultsNumber(10);
      setMoreRequest(10);

      asyncPost();

      if (e.target.value === "") {
        setSearchResponse("É necessário digitar algo no campo de buscas...");
        setSearchValue("");
      }
    }

    if (e.keyCode === 8) {
      setSearchResponse("");
      setSearchValue("");
      setTitleTag("");
      setResultsNumber(0);
    }

    if (e.target.value.length >= 20) {
      setSearchResponse("Limite de caracteres atingido 🚨.");
    }
  }

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
      <header className="heroHeader">
        <div className="heroContainer">
          <h1>Encontre hashtags de maneira fácil.</h1>

          <p>
            Digite o que deseja no campo de buscas e confira os resultados do
            Twitter abaixo
          </p>
        </div>

        <div className="heroSearchBar">
          <img
            src={IconSearch}
            onClick={() => {
              setSearchResponse(<LoaderComponent />);
              setMoreRequest(10);
              setSearchValue(
                document
                  .getElementById("input")
                  .value.replace(/[^a-zA-Z0-9_]/g, "")
                  .replace(" ", "")
              );

              if (!document.getElementById("input").value.length) {
                setSearchResponse(
                  "É necessario digitar algo no campo de buscas..."
                );

                setSearchValue("");
              }
            }}
            alt=""
          />{" "}
          <input
            id="input"
            type="search"
            onKeyDown={handleValue}
            placeholder="Buscar..."
            maxLength={20}
          />
        </div>
        {searchResponse ? (
          <>
            <motion.div
              initial={{ y: animationMode, opacity: 0 }}
              animate={{ y: animationMode, opacity: 1 }}
              onClick={() => setanimationMode(animationMode)}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="searchResponse">
                <div className="responseText">{searchResponse}</div>
              </div>
            </motion.div>
          </>
        ) : null}

        <div className="gradient-bg"></div>
      </header>

      <main className="mainHome">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mainAnimation"
        >
          {tweets ? (
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
          ) : null}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {tweets ? (
              <h2>
                Exibindo os {moreRequest > 0 ? moreRequest - 10 : null}{" "}
                resultados mais recentes para #{titleTag}
              </h2>
            ) : null}

            <section className="mainGrid">
              <section className="gridLeftDesktop">
                <div className="imgBox">
                  {tweetimgs?.map(({ user, username, img, id }) => {
                    return (
                      <>
                        <ImgCard
                          twitterUserName={username}
                          tweetImage={img}
                          tweetId={id}
                          key={id}
                        />
                      </>
                    );
                  })}
                </div>
              </section>

              <section className="gridRightDesktop">
                {tweets?.map(({ user, username, text, id, photo }) => {
                  return (
                    <>
                      <TweetCard
                        tweetText={text}
                        userName={username}
                        user={user}
                        userImage={photo}
                        tweetId={id}
                        key={id}
                      />
                    </>
                  );
                })}
              </section>

              {imageActive ? (
                <motion.div
                  initial={{ y: animationMode, opacity: 0 }}
                  animate={{ y: animationMode, opacity: 1 }}
                  onClick={() => setanimationMode(animationMode)}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <>
                    <section className="gridLeft">
                      {tweetimgs?.map(({ user, username, img, id }) => {
                        return (
                          <>
                            <ImgCard
                              twitterUserName={username}
                              tweetImage={img}
                              tweetId={id}
                              key={id}
                            />
                          </>
                        );
                      })}
                    </section>
                  </>
                </motion.div>
              ) : (
                <>
                  <section className="gridRight">
                    <motion.div
                      initial={{ y: animationMode, opacity: 0 }}
                      animate={{ y: animationMode, opacity: 1 }}
                      onClick={() => setanimationMode(!animationMode)}
                      transition={{ duration: 0.7, delay: 0.4 }}
                    >
                      {tweets?.map(({ user, username, text, id, photo }) => {
                        return (
                          <>
                            <TweetCard
                              tweetText={text}
                              userName={username}
                              user={user}
                              userImage={photo}
                              tweetId={id}
                              key={id}
                            />
                          </>
                        );
                      })}
                    </motion.div>
                  </section>
                </>
              )}
            </section>
          </motion.div>

          {loading ? (
            <motion.div
              initial={{ y: animationMode, opacity: 0 }}
              animate={{ y: animationMode, opacity: 1 }}
              onClick={() => setanimationMode(animationMode)}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="loaderComp">
                <LoaderComponent />
              </div>
            </motion.div>
          ) : null}
        </motion.div>
      </main>
      {scrollTopButton ? (
        <>
          <div
            className="topScrollButton scrollTop"
            onClick={scrollTop}
            style={{ height: 40, display: showScroll ? "flex" : "none" }}
          >
            <FaArrowCircleUp />
          </div>
        </>
      ) : null}
      <Footer />
    </>
  );
};

export default Home;
