import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home";

function Routes(){
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
        </BrowserRouter>
    );
}

export default Routes;