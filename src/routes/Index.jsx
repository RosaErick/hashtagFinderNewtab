//main React functions/components
import { Routes, Route, Navigate } from "react-router-dom";

//user created functions/components
import AuthProvider from '../contexts/auth';


//pages and imports
import NotFound from "../components/NotFound";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import About from "../pages/about/AppAbout";

export default function DefaultRoutes(){


    return(
        <AuthProvider>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />

                <Route path="/list" element={
                    <RequireAuth redirectTo="/login">
                        <List />
                    </RequireAuth>
                    
                }/>
            </Routes>
        
                
        </AuthProvider>
    )

    function RequireAuth({
        children, redirectTo
    }){
    
        let isAutehnticated = true;
        return isAutehnticated ? children : <Navigate to={redirectTo} />;
    }

}
