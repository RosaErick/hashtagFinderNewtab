import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import iconHome from "../../assets/img/icon-home.svg";

import '../../css/login.css';


//Testing netlify routes
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    navigate("/list");
  }

  
  return (
    <>
      <Navbar buttons={[
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
              <input type="text" name="username" id="username" placeholder=" " autoComplete="off" className="formInput" required />
            </div>
            <div className="formInput">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" placeholder=" " autoComplete="off" className="formInput" required />

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
