import React from "react";
import Ilustration from "../../assets/img/aboutIlustration.svg";
import IconGitHub from "../../assets/img/iconGithub.svg";
import IconLinkedin from "../../assets/img/iconAwesomeLinkedin.svg";
import IconMessage from "../../assets/img/iconEnvelope.svg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../css/AppStyleAbout.css";
import { useEffect, useState } from "react";

// navbar icons
import iconInfo from "../../assets/img/iconInfoCircle.svg";
import iconUser from "../../assets/img/iconUserAlt.svg";

export default function App() {

  const [textSobre, setTextoSobre] = useState("");
  const [dadosEquipe, setDadosEquipe] = useState([]);

  const dados = [
    { "id": 1, "name": "Daniel Denardi", "img": "https://avatars.githubusercontent.com/u/84968799?v=4", "description": "M.e em Ciências da Linguagem, Eng. Elétrico e Psicólogo, aprimorando Desenvolvimento Web Full Stack, foco em React.", "linkGitHub": "https://github.com/dandenardi", "linkMessage": "mailto:dan.denardi@gmail.com", "linkLinkedin": "https://www.linkedin.com/in/danieldenardi/" },
    { "id": 2, "name": "Erick Rosa", "img": "https://github.com/rosaerick.png", "description": "Esp. em Tradução de Inglês, Ldo. em História, aprimorando Desenvolvimento Web, foco em Front End.", "linkGitHub": "https://github.com/RosaErick", "linkMessage": "mailto:erickpmotta@gmail.com", "linkLinkedin": "https://www.linkedin.com/in/erick-rosa-dev//" },
    { "id": 3, "name": "Luan Santos", "img": "https://avatars.githubusercontent.com/u/39232355?v=4", "description": "Tec. em Multimídia, Dev. Jr. pioneiro com Bots no Discord, aprimorando Desenvolvimento Web Full Stack.", "linkGitHub": "https://github.com/luandunas", "linkMessage": "mailto:luan@dunas.ga", "linkLinkedin": "https://www.linkedin.com/in/luandunas/" },
    { "id": 4, "name": "Samir Santos", "img": "https://avatars.githubusercontent.com/u/88064533?v=4", "description": "M.e em Ciências da Educação, Ldo. em Biologia, aprimorando Desenvolvimento Web Full Stack.", "linkGitHub": "https://github.com/santossamir", "linkMessage": "mailto:santossamir@hotmail.com", "linkLinkedin": "https://www.linkedin.com/in/samir-santos-88191519b/" }
  ];

  useEffect(() => {
    fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?view=Grid%20view&filterByFormula={Squad}=150222', {
      method: "GET",
      headers: {
        "Authorization": "Bearer key2CwkHb0CKumjuM"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setTextoSobre(data.records[0].fields.Sobre)
    })

    fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?view=Grid%20view&filterByFormula={Squad}=150222', {
      method: "GET",
      headers: {
        "Authorization": "Bearer key2CwkHb0CKumjuM"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setDadosEquipe(data.records);
      console.log(data)
    })
  }, [])

  return (
    <>
      <Navbar buttons={[{ "title": "Sobre", "icon": iconInfo, "route": "/about", "backgroundColor": "#72EFDB", "textColor": "#0A1744" },
      { "title": "Login", "icon": iconUser, "route": "/login", "backgroundColor": "#0A1744", "textColor": "#FFF" }
      ]} />
      <div className="divContainer">
        <div className="divAboutProject">
          <div className="descriptionAboutProject">
            <h1>Sobre o projeto</h1>
            <p>
              {textSobre}
            </p>
          </div>
          <div className="ilustrationAboutProject">
            <img src={Ilustration} alt="Imagem ilustrativa" />
          </div>
        </div>
        <div className="divWhoWeAre">
          <h2>Quem somos</h2>
          <div className="boxAboutWe">
            {dadosEquipe.map(item => (
              <div key={item.id} className="profile">
                <img className="imgProfile" src={item.fields.Imagem[0].url} alt="Imagem perfil" />
                <h4>{item.fields.Nome}</h4>
                <p>
                  {item.fields["Descrição"]}
                </p>
                <div className="ourIcons">
                  <a href={item.fields.LinkGitHub}><img src={IconGitHub} alt="Imagem icone Github" /></a>
                  <a href={item.fields.Email}><img src={IconMessage} alt="Imagem icone E-mail" /></a>
                  <a href={item.fields.LinkedIn}><img src={IconLinkedin} alt="Imagem icone Linkedin" /></a>
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