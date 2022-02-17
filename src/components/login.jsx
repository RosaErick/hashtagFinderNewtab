import '../css/App.css';
import '../css/login.css';

function Login() {
    return (
      <div className="App">
          <div className="Header">
              <h1>HEADER</h1>
          </div>
          <div className="Body">
            
            <div className="form-container">
              <h2>Login</h2>
              <form>
                  
                  <input className="text-input" type="text" name="email" placeholder="Email"/>  
                
                  <input type="password" name="pass" placeholder="Password"/>
                  
                <button type="submit">ACESSAR</button>
              </form>
            </div>
            
          </div>
        
      </div>
    );
  }
  
  export default Login;
  