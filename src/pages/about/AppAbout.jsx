import React from "react";
import Ilustration from "../../assets/img/aboutIlustration.svg";
import IconGitHub from "../../assets/img/iconGithub.svg";
import IconLinkedin from "../../assets/img/iconAwesomeLinkedin.svg";
import IconMessage from "../../assets/img/iconEnvelope.svg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../css/AppStyleAbout.css";

// navbar icons
import iconInfo from "../../assets/img/iconInfoCircle.svg";
import iconUser from "../../assets/img/iconUserAlt.svg"

export default function App () {

  const dados = [
    {"id":1,"name":"Daniel Denardi","img":"https://avatars.githubusercontent.com/u/84968799?v=4","description":"M.e em Ciências da Linguagem, Eng. Elétrico e Psicólogo, aprimorando Desenvolvimento Web Full Stack, foco em React.", "linkGitHub":"https://github.com/dandenardi","linkMessage":"mailto:dan.denardi@gmail.com","linkLinkedin":"https://www.linkedin.com/in/danieldenardi/"},
    {"id":2,"name":"Erick Rosa","img":"https://github.com/rosaerick.png","description":"Esp. em Tradução de Inglês, Ldo. em História, aprimorando Desenvolvimento Web, foco em Front End.","linkGitHub":"https://github.com/RosaErick","linkMessage":"mailto:erickpmotta@gmail.com","linkLinkedin":"https://www.linkedin.com/in/erick-rosa-dev//"},
    {"id":3,"name":"Luan Santos","img":"https://avatars.githubusercontent.com/u/39232355?v=4","description":"Tec. em Multimídia, Dev. Jr. pioneiro com Bots no Discord, aprimorando Desenvolvimento Web Full Stack.","linkGitHub":"https://github.com/luandunas", "linkMessage":"mailto:luan@dunas.ga", "linkLinkedin": "https://www.linkedin.com/in/luandunas/"},
    {"id":4,"name":"Samir Santos","img":"https://avatars.githubusercontent.com/u/88064533?v=4","description":"M.e em Ciências da Educação, Ldo. em Biologia, aprimorando Desenvolvimento Web Full Stack.","linkGitHub":"https://github.com/santossamir","linkMessage":"mailto:santossamir@hotmail.com","linkLinkedin":"https://www.linkedin.com/in/samir-santos-88191519b/"}
  ];


  
  return(
    <>
     <Navbar buttons={[{"title": "Sobre", "icon": iconInfo, "route": "/about","backgroundColor": "#72EFDB", "textColor": "#0A1744"},
                            {"title": "Login", "icon": iconUser, "route": "/login","backgroundColor": "#0A1744", "textColor": "#FFF"}
                          ]}/>
        <div className="divContainer">
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
                  <img src={Ilustration} alt="Imagem ilustrativa"/>
              </div>
            </div>
            <div className="divWhoWeAre">
              <h2>Quem somos</h2>
              <div className="boxAboutWe">
                {dados.map(item =>(
                  <div key={item.id} className="profile">
                    <img className="imgProfile" src={item.img} alt="Imagem perfil"/>
                    <h4>{item.name}</h4>
                    <p>
                      {item.description} 
                    </p>
                    <div className="ourIcons">
                      <a href={item.linkGitHub}><img src={IconGitHub} alt="Imagem icone Github"/></a>
                      <a href="mailto:{item.linkMessage}"><img src={IconMessage} alt="Imagem icone E-mail"/></a>
                      <a href={item.linkLinkedin}><img src={IconLinkedin} alt="Imagem icone Linkedin"/></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <Footer />
        </div>
    </>
  )
}