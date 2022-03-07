//Main React components
import { useState, useEffect } from "react";

//Project components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//Icons and UI
import iconHome from "../../assets/img/icon-home.svg";

//styles
import '../../css/login.css';


//Testing netlify routes
import { useNavigate } from "react-router-dom";

const APIGET = 'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login';
  //Main Function
function Login(props) {
  
  //Variables that control user inputs
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);
  const [showUserErrorText, setShowUserErrorText] = useState(false);
  const [showPassErrorText, setShowPassErrorText] = useState(false);
  const [userErr, setUserErr] = useState('');
  const [passErr, setPassErr] = useState('');

  //variable to store the users allowed to see restricted pages
  const [usersList, setUsersList] = useState([]);

  //variable that allows to redirect (under routes)
  const navigate = useNavigate();

  useEffect(() => {
    //function that retrieves users with priviliges
    async function getList() {

      const requestOptions = {
        method: "GET",
        headers: {
          authorization: "Bearer key2CwkHb0CKumjuM",
          "Content-Type": "application/json",
        },

      };

      const response = await fetch(APIGET, requestOptions);
      const data = await response.json();
      setUsersList(data.records);

    }
    getList();
  }, [])


  //functions that handle input
  function handleUserBlur(e) {
    //function that verifies input after user leaves the input
    if (e.target.value === '') {
      setError(true);
      setShowUserErrorText(true);
      setUserErr(' Campo vazio');

    } else if (e.target.validity.patternMismatch) {
      setError(true);
      setShowUserErrorText(true);
      setUserErr(' O usuário precisa ser um endereço de e-mail válido (ex. usuario@provedor.com');
    }
    else {
      setError(false);
    }

  }

  function handleUserInput(e) {
    //function that handles username after it was validated
    if (error !== true) {
      setUserInput(e.target.value);
    }

  }

  function handleUserFocus(e) {
    //function that handles input (field username) after user clicked inside it
    
    setError(false)
    setShowUserErrorText(false);
    setUserErr('');
    
  }

  function handlePassBlur(e) {
    //function that verifies what was typed within password field (after user leaves)
    if (e.target.value === '') {
      setError(true);
      setShowPassErrorText(true);
      setPassErr(' Campo vazio');
    } else {
      setError(false);
    }

  }

  function handlePassInput(e) {
    //function that handles input (password field) after it was validated

    if (error !== true) {
      setPasswordInput(e.target.value);
    }
  }

  function handlePassFocus(e) {
    //function that handles input (password field) when user inputs again
    
    setError(false)
    setShowPassErrorText(false);
    setPassErr('');
    
  }

  
  function handleSubmit(e) {
    //function that handles the form submission
    e.preventDefault();
    e.stopPropagation();
    handleUser();

  }

  
  function handleUser() {
  //function called after submit is clicked. It verifies credentials and stores two main variables (userId and signed) 
    let users = usersList;
    for (let el in users) {

      if ((users[el].fields.Email === userInput) &&
        (users[el].fields.Senha === passwordInput) && (users[el].fields.Squad === '150222')) {
        setShowUserErrorText(false);
        props.setUserId(users[el].id);
        props.setSigned(true);
        handleRedirection();

      } else {

        setShowUserErrorText(true);
        props.setSigned(false);
        setUserErr("Não Existe usuário cadastrado com estas credenciais");
      };

    }
  }

  
  function handleRedirection() {
    //function that handles redirection/rotes
    let isSigned = props.signed;
    console.log(isSigned);
    if (isSigned === true) {
      
      navigate("/list");
      //redirect to list page, after login is successful
    } else {
      console.log("Não foi possível autenticar...");
      
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
                <p role="alert" style={{ color: "rgb(255, 0, 0)", textShadow: " 0px 1px #F9F" }}>
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
                <p role="alert" style={{ color: "rgb(255, 0, 0)", textShadow: " 0px 1px #F9F"}}>
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
