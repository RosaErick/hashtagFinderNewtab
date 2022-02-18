import React from "react";
import Ilustration from "../../assets/img/aboutIlustration.svg";
import IconGitHub from "../../assets/img/iconGithub.svg";
import IconLinkedin from "../../assets/img/iconAwesomeLinkedin.svg";
import IconMessage from "../../assets/img/iconEnvelope.svg";
import DanielDenardi from "../../assets/img/danielDenardi.jpeg";
import ErickRosa from "../../assets/img/erickRosa.jpeg";
import LuanDunas from "../../assets/img/luanDunas.jpeg";
import SamirSantos from "../../assets/img/samirSantos.jpeg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../css/AppStyleAbout.css";

// navbar icons
import iconInfo from "../../assets/img/iconInfoCircle.svg";
import iconUser from "../../assets/img/iconUserAlt.svg"




export default function App () {
  
  return(
      <div className="divContainer">
        <Navbar buttons={[{"title": "Sobre", "icon": iconInfo, "route": "/about","backgroundColor": "#72EFDB", "textColor": "#0A1744"},
                          {"title": "Login", "icon": iconUser, "route": "/login","backgroundColor": "#0A1744", "textColor": "#FFF"}
                        ]}/>
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
                <img className="imgProfile" src={DanielDenardi}/>
                <h4>Daniel Denardi</h4>
                <p>
                  M.e em Ciências da Linguagem, Eng. Elétrico e Psicólogo,
                  aprimorando Desenvolvimento Web Full Stack,
                  foco em React. 
                </p>
                <div className="ourIcons">
                  <a href="https://github.com/dandenardi"><img src={IconGitHub}/></a>
                  <a href=""><img src={IconMessage}/></a>
                  <a href="https://www.linkedin.com/in/danieldenardi/"><img src={IconLinkedin}/></a>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src={ErickRosa}/>
                <h4>Erick Rosa</h4>
                <p>
                  Esp. em Tradução de Inglês, Ldo. em História, aprimorando
                  Desenvolvimento Web, foco em Front End.
                </p>
                <div className="ourIcons">
                  <a href="https://github.com/RosaErick"><img src={IconGitHub}/></a>
                  <a href=""><img src={IconMessage}/></a>
                  <a href="https://www.linkedin.com/in/erick-rosa-dev//"><img src={IconLinkedin}/></a>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src={LuanDunas}/>
                <h4>Luan Santos</h4>
                <p>
                  Tec. em Multimídia, Dev. Jr. pioneiro com Bots no Discord, aprimorando
                  Desenvolvimento Web Full Stack.
                </p>
                <div className="ourIcons">
                  <a href="https://github.com/luandunas"><img src={IconGitHub}/></a>
                  <a href=""><img src={IconMessage}/></a>
                  <a href="https://www.linkedin.com/in/luandunas/"><img src={IconLinkedin}/></a>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src={SamirSantos}/>
                <h4>Samir Santos</h4>
                <p>
                   M.e em Ciências da Educação, Ldo. em Biologia,
                   aprimorando Desenvolvimento Web Full Stack.
                </p>
                <div className="ourIcons">
                  <a href="https://github.com/santossamir"><img src={IconGitHub}/></a>
                  <a href=""><img src={IconMessage}/></a>
                  <a href="https://www.linkedin.com/in/samir-santos-88191519b/"><img src={IconLinkedin}/></a>
                </div>
              </div>
            </div>
          </div>
        </body>
        <Footer />
      </div>
  )
}