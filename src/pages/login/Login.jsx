import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import iconHome from "../../assets/img/icon-home.svg";

import '../../css/login.css';

function Login() {
    return (
      <>
        <Navbar />
        <main className="mainLogin">
            
          
          <div className="formContainer">
            
            <form class="loginForm">
                <h2>Login</h2>
                <div class="formInput">
                  <label htmlFor="username">Usuário</label>
                  <input type="text" name="username" id="username" placeholder=" " autocomplete="off" className="formInput" required />
                </div>
                <div class="formInput">
                  <label htmlFor="password">Senha</label>
                  <input type="password" name="password" id="password" placeholder=" " autocomplete="off" className="formInput" required />
                  
                </div>
              
                <div class="nav-menu">
                  <button class="submitBtn">
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
  