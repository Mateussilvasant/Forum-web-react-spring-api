import { BrowserRouter, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Profile from "../pages/Profile";
import Home  from '../pages/Home';
import {UserAuthorization,connector} from "./connector";

export function Routes(props : UserAuthorization){

    useEffect(() => {
        props.checkAuth();
    });

    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Profile} path="/profile" />
        </BrowserRouter>
    );
}


export default connector(Routes);