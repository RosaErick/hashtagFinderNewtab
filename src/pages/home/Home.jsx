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
import { postData } from "../../api/PostAirtable";

const Home = () => {
  const [imageActive, setActiveState] = useState("");
  const [colorMode, setColorState] = useState("");
  const [animationMode, setanimationMode] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchResponse, setSearchResponse] = useState("");
  const [postSearch, setpostSearch] = useState(null);
  const [tweetsData, setTweetsData] = useState([]);
  const [titleTag, setTitleTag] = useState();
  const toogleHandle = () =>
    setActiveState(!imageActive) || setColorState(!colorMode);

  useEffect(() => {
    if (searchValue) {
      const asyncCall = async () => {
        const post = await postData(searchValue);

        const tweet = await getTweets(searchValue);

        setTweetsData([tweet]);
        setpostSearch(post);
        setTitleTag(searchValue);
        console.log(postSearch);
        console.log(tweet);
        console.log(tweetsData);
      };
      asyncCall();
    }
  });

  function handleValue(e) {
    if (e.keyCode === 13) {
      setSearchValue(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""));
      setSearchResponse("Aguarde a busca...");

      if (e.target.value === "") {
        setSearchResponse("É necessario digitar algo no campo de buscas..");
        setSearchValue("");
      }
    }

    if (e.keyCode === 8) {
      setSearchResponse("");
      setSearchValue("");
      setTitleTag("");

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
          <img src={IconSearch} alt="" />{" "}
          <input
            type="search"
            onKeyDown={handleValue}
            placeholder="Buscar..."
          />
        </div>
        {searchResponse ? (
          <>
            <div className="searchResponse">
              <p>{searchResponse}</p>
            </div>
          </>
        ) : null}

        <div className="gradient-bg"></div>
      </header>

      <main className="mainHome">
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

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2>Exibindo os 10 resultados mais recentes para #{titleTag}</h2>
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
              {searchValue
                ? Object(tweetsData).map((item, index) => {
                    console.log(item);
                    console.log(item.data);
                    console.log(tweetsData);
                    console.log(item.text);
                    const tweets = [...item.data, ...item.includes.users];

                    console.log(tweets);
                    return tweets.map((t) => {
                      console.log(t.username);

                      return (
                        <>
                          <TweetCard
                            userImage={t.profile_image_url}
                            tweetText={t.text}
                            user={t.name}
                            key={t.id}
                            userName={t.username}
                          />
                        </>
                      );
                    });
                  })
                : null}
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
                    {searchValue
                      ? Object(tweetsData).map((item, index) => {
                          console.log(item.data[index].id);
                          const tweets = [...item.includes.users, ...item.data];

                          console.log(tweets);
                          return tweets.map((t) => {
                            console.log(tweets);

                            return (
                              <>
                                <TweetCard
                                  tweetText={t.text}
                                  user={t.name}
                                  key={t.id}
                                  userName={t.username}
                                />
                              </>
                            );
                          });
                        })
                      : null}
                  </motion.div>
                </section>
              </>
            )}
          </section>
        </motion.div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
