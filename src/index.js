import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter  } from "react-router-dom";
import  AuthProvider from '../../hastagFinderNewtab/src/contexts/auth'; 
import DefaultRoutes from "./routes/Index";

//css imports
import "./css/Global.css";
import "./css/index.css";

//pages and imports


ReactDOM.render(
  
    
  <AuthProvider>
    <React.StrictMode>
      <BrowserRouter>
          <DefaultRoutes />
        </BrowserRouter>
      </React.StrictMode>     
  </AuthProvider>
      
  
  ,
  document.getElementById("root")
);
