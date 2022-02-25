import { useState, useContext } from "react";
import AuthContext from '../../contexts/auth';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import iconHome from "../../assets/img/icon-home.svg";

import '../../css/login.css';


//Testing netlify routes
import { useNavigate } from "react-router-dom";


function Login() { 
  
  const context = useContext(AuthContext);

  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);
  const [showUserErrorText, setShowUserErrorText] = useState(false);
  const [showPassErrorText, setShowPassErrorText] = useState(false);
  const [userErr, setUserErr] = useState('');
  const [passErr, setPassErr] = useState('');

  console.log(context);

  let navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    
    //it is needed to perform a check if the credentials match the ones in database to redirect
    navigate("/list");
    //redirect to list page, after login is successful
  }


  function handleUserBlur(e){
    
    
    if (e.target.value === ''){
      setError(true);
      setShowUserErrorText(true);
      setUserErr(' Campo vazio');
     
    }else if(e.target.validity.patternMismatch){
      setError(true);
      setShowUserErrorText(true);
      setUserErr(' O usuário precisa ser um endereço de e-mail válido (ex. usuario@provedor.com');
    }
    else{
      setError(false);
    }

  }

  function handleUserInput(e){
    if (error !== true){
      setUserInput(e.target.value);
    }

  }

  function handleUserFocus(e){
    if (error === true){
      setError(false)
      setShowUserErrorText(false);
      setUserErr('');
    }
  }

  function handlePassBlur(e){
    
    
    if (e.target.value === ''){
      setError(true);
      setShowPassErrorText(true);
      setPassErr(' Campo vazio');
    }else{
      setError(false);
    }

  }

  function handlePassInput(e){
    if (error !== true){
      setPasswordInput(e.target.value);
    }
  }

  function handlePassFocus(e){
    if (error === true){
      setError(false)
      setShowPassErrorText(false);
      setPassErr('');
    }
  }

  return (

    
    <>
      <Navbar buttons={[
        //navigation bar, on top
        {
          "title": "Home",
          "icon": iconHome,
          "route": "/",
          "backgroundColor": "#72EFDB",
          "textColor": "#0A1744",
          "margin": "0 0 0 80px",
        },

      ]} />
      
      
      <main className="mainLogin">
      
        <div className="formContainer">
          
          <form className="loginForm" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="formInput">
              <label htmlFor="username">Usuário</label>
              <input
                type="email"
                id="emailField"
                className="formInput"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}$"
                value={userInput}
                onBlur={handleUserBlur}
                onFocus={handleUserFocus}
                onChange={handleUserInput}
              />
              {showUserErrorText && (
                <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                  Por favor, corrija o seguinte erro: {userErr}
                </p>
              )}
    
            </div>
            <div className="formInput">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="passwordField"
                className="formInput"
                value={passwordInput}
                onChange={handlePassInput}
                onBlur={handlePassBlur}
                onFocus={handlePassFocus}
              />
              {showPassErrorText && (
                <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                  Por favor, corrija o seguinte erro:  {passErr}
                </p>
              )}
    
            </div>

            <div className="navBtn">
              <div className="navMenu">
                <button className="submitBtn">
                  {" "}
                  ACESSAR
                </button>
              </div>
            </div>
          

          </form>
        </div>
      
      </main>
      <Footer />
    </>


  );
}

export default Login;
