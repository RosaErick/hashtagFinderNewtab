import React from "react";
import Icon from "./img/iconInfoCircle.svg";
import User from "./img/iconUser.svg";
import Ilustration from "./img/aboutIlustration.svg";
import IconGitHub from "./img/iconGithub.svg";
import IconLinkedin from "./img/iconAwesomeLinkedin.svg";
import IconMessage from "./img/iconEnvelope.svg";

export default function App () {

  return(
      <div className="divContainer">
        <header>
          <div className="logo">
            hashtag<span>finder</span>
          </div>
          <div className="divButtonsHeader">
            <div className="buttonAbout">
              <button>
                <img src={Icon}/>
                Sobre
              </button>
            </div>
            <div className="buttonLogin">
              <button>
              <img src={User}/>
                Login
              </button>
            </div>
          </div>
        </header>
        <body>
          <div className="divAboutProject">
            <div className="descriptionAboutProject">
              <h1>Sobre o projeto</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
              </p>
            </div>
            <div className="ilustrationAboutProject">
                <img src={Ilustration}/>
            </div>
          </div>
          <div className="divWhoWeAre">
            <h2>Quem somos</h2>
            <div className="boxAboutWe">
              <div className="profile">
                <img className="imgProfile" src="#"/>
                <h4>Nome Sobrenome</h4>
                <p>
                   Lorem Ipsum is simply dummy text of the
                   printing and typesetting industry. 
                </p>
                <div className="ourIcons">
                  <img src={IconGitHub}/>
                  <img src={IconMessage}/>
                  <img src={IconLinkedin}/>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src="#"/>
                <h4>Nome Sobrenome</h4>
                <p>
                   Lorem Ipsum is simply dummy text of the
                   printing and typesetting industry.
                </p>
                <div className="ourIcons">
                  <img src={IconGitHub}/>
                  <img src={IconMessage}/>
                  <img src={IconLinkedin}/>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src="#"/>
                <h4>Nome Sobrenome</h4>
                <p>
                   Lorem Ipsum is simply dummy text of the
                   printing and typesetting industry.
                </p>
                <div className="ourIcons">
                  <img src={IconGitHub}/>
                  <img src={IconMessage}/>
                  <img src={IconLinkedin}/>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src="#"/>
                <h4>Nome Sobrenome</h4>
                <p>
                   Lorem Ipsum is simply dummy text of the
                   printing and typesetting industry.
                </p>
                <div className="ourIcons">
                  <img src={IconGitHub}/>
                  <img src={IconMessage}/>
                  <img src={IconLinkedin}/>
                </div>
              </div>
            </div>
          </div>
        </body>
        <footer>
          <p>@Cocreare 2022.Todos os direitos reservados</p>
        </footer>
      </div>
  )
}