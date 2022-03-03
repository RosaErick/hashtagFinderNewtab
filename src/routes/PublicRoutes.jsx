import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

//pages and imports
import NotFound from "../components/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/AppAbout";


function PublicRoutes(){
   
   return(
        <BrowserRouter>     
            <Routes>
                 
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />

            </Routes>
        
        </BrowserRouter>
   )
   
}

export default PublicRoutes;
  
    