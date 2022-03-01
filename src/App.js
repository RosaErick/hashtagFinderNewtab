import { useState } from "react";

import React from "react";
import Context from "./contexts/Context";
import Routes from "./routes/Index";

function App() {
    
    const[userId, setUserId] = useState('');
    const[userEmail, setUserEmail] = useState('');
    const[userPassword, setUserPassword] = useState('');
    const[signed, setSigned] = useState(false);

    return (
      
        <Context.Provider value={{
                userId, 
                setUserId, 
                userEmail, 
                setUserEmail, 
                userPassword, 
                setUserPassword, 
                signed, 
                setSigned
            }}>
            <Routes />
        </Context.Provider>
    );
  }
  
  export default App;