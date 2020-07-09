import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Profile from "./pages/Profile";

function Routes(){
    return (
        <BrowserRouter>
            <Route component={Profile} path="/" exact/>
        </BrowserRouter>
    );
}

export default Routes;