import React from "react";
import ReactDOM from "react-dom";
import Routes from '../src/routes/index';
import Context from "./contexts/Context";
import App from "../src/App";

//css imports
import "./css/Global.css";
import "./css/index.css";

//pages and imports


ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
      
  ,
  document.getElementById("root")
);
