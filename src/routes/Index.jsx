//Main react components
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//pages and imports
import NotFound from "../components/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/login/Logout";
import About from "../pages/about/AppAbout";
import List from '../pages/list/List';

function MainRoutes(props){
   //function that controls user access to routes

    //variables used for authentication
    const [userId, setUserId] = useState('');
    const [signed, setSigned] = useState(false);

   return(
        <BrowserRouter>     
            <Routes>
                 
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login signed={signed} setSigned={setSigned} userId={userId} setUserId={setUserId}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/logout" element={<Logout setSigned={setSigned} signed={signed}/>} />
                {signed && (<Route path="/list" element={<List/>}/> )}

            </Routes>
        
        </BrowserRouter>
   )
    
}   

export default MainRoutes;