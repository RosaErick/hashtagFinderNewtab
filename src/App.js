import { useState } from "react";
import React from "react";
import Context from "./contexts/Context";
import Routes from './routes/Index';

function App() {
    
    const[userId, setUserId] = useState('');
    const[signed, setSigned] = useState(false);

    return (
      
        <Context.Provider value={{userId, setUserId, signed, setSigned}}>
            <Routes />
        </Context.Provider>
    );
  }
  
  export default App;