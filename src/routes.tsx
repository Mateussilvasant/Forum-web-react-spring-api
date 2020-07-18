import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Profile from "./pages/Profile";
import Home  from './pages/Home';

function Routes(){
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Profile} path="/profile" />
        </BrowserRouter>
    );
}

export default Routes;