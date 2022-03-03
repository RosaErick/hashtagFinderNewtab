import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import List from '../pages/list/List';

function ProtectedRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/list" element={<List />} />
            </Routes>
            
        </BrowserRouter>
    )
    
}

export default ProtectedRoutes;