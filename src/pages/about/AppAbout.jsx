import React from "react";
import { useEffect, useState } from "react";
import Ilustration from "../../assets/img/aboutIlustration.svg";
import IconGitHub from "../../assets/img/iconGithub.svg";
import IconLinkedin from "../../assets/img/iconAwesomeLinkedin.svg";
import IconMessage from "../../assets/img/iconEnvelope.svg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../css/AppStyleAbout.css";

// navbar icons
import iconInfo from "../../assets/img/iconInfoCircle.svg";
import iconUser from "../../assets/img/iconUserAlt.svg";

export default function App() {

  const [textSobre, setTextoSobre] = useState("");
  const [dadosEquipe, setDadosEquipe] = useState([]);

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
      { "title": "Login", "icon": iconUser, "route": "/login", "backgroundColor": "#1E3E7B", "textColor": "#FFF" }
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
                  <a href={item.fields.Github}><img src={IconGitHub} alt="Imagem icone Github" /></a>
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