import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import iconHome from "../../assets/img/icon-home.svg";

import '../../css/login.css';

function Login() {
    return (
      <>
        <Navbar buttons={[
            {"title": "Home", 
              "icon": iconHome, 
              "route": "/",
              "backgroundColor": "#72EFDB", 
              "textColor": "#0A1744"},
              
            ]}/>
          <main className="mainLogin">
            
          
          <div className="formContainer">
            
            <form className="loginForm">
                <h2>Login</h2>
                <div className="formInput">
                  <label htmlFor="username">Usuário</label>
                  <input type="text" name="username" id="username" placeholder=" " autocomplete="off" className="formInput" required />
                </div>
                <div className="formInput">
                  <label htmlFor="password">Senha</label>
                  <input type="password" name="password" id="password" placeholder=" " autocomplete="off" className="formInput" required />
                  
                </div>
              
                <div className="navMenu">
                  <button className="submitBtn">
                    {" "}
                    ACESSAR
                  </button>
                </div>
            </form>
          </div>

        </main>
        <Footer />
      </>
      
      
    );
  }
  
  export default Login;
  