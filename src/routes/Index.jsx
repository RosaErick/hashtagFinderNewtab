import React, {useState} from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


//pages and imports
import NotFound from "../components/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/AppAbout";
import List from '../pages/list/List';

function MainRoutes(props){
   
    const [userId, setUserId] = useState('');
    const [signed, setSigned] = useState(false);

   return(
        <BrowserRouter>     
            <Routes>
                 
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login signed={signed} setSigned={setSigned} userId={userId} setUserId={setUserId}/>} />
                <Route path="/about" element={<About />} />

                    
                {signed && (<Route path="/list" element={<List />}/> )}

            </Routes>
        
        </BrowserRouter>
   )
   



    

    
}   

export default MainRoutes;