import { BrowserRouter, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Profile from "./pages/Profile";
import Home  from './pages/Home';
import {ActionAuthorization} from "./actions/authorization"
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from './helpers/combineReducers';
import { dispatch } from './helpers/store';

export function Routes(props : PropsRedux){

    useEffect(() => {
        dispatch(ActionAuthorization().checkAuthorization());
    });

    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Profile} path="/profile" />
        </BrowserRouter>
    );
}



type PropsRedux = ConnectedProps<typeof connector>

const mapDispatchToProps  = {
    ActionAuthorization
}


const mapStateToProps = (state : RootState) => ({
    authorized : state.auth.authorized 
})

const connector = connect(mapStateToProps,mapDispatchToProps);

export default connector(Routes);