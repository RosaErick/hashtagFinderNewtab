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
          <div className="divAboutProject">
            <div className="descriptionAboutProject">
              <h1>Sobre o projeto</h1>
              <p>
                Este projeto visa envolver as atuações de um Desenvolvedor Web Front End. Com isso,
                elaboramos uma página web responsiva para visualização de mensagens e imagens associados
                com a API do <i>Twitter</i>. Ele foi desenvolvido por quatro indivíduos, todos estudantes
                do curso de Desenvolvimento Web da <strong>Newtab Academy</strong>, uma escola de tecnologia
                especializada na formação profissional e empregabilidade na área de programação, em que foram
                utilizados os conhecimentos adquiridos nos módulos de HTML, CSS, Javascript e React. O projeto
                está distribuido em duas partes: as páginas acessíveis ao público e as páginas restritas. As
                acessíveis são a <i>Home</i>, com um campo de busca via <i>hashtag</i> e áreas para observar
                mensagens e imagens; e a <i>Sobre</i>, onde vemos uma breve explicação do projeto e apresentação
                dos envolvidos. Nas restritas, temos a <i>Login</i>, com campo de e-mail, senha e botão de acesso;
                e a <i>Listagem de buscas</i>, que apresenta uma tabela com as <i>hashtags</i>, data e hora das publicações. 
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
        <Footer />
      </div>
  )
}