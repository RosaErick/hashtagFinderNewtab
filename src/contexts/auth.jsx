import React, { useState, createContext, useEffect } from "react";
import { loginApi } from "../api/apiLogin";

const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        function loadStorage(){
            const storageUser = localStorage.getItem('user')

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
    
            setLoading(false)
        }
        loadStorage();
        
    }, [])

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;