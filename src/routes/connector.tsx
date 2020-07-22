import { ConnectedProps, connect } from "react-redux";
import { RootState } from "../helpers/reducers";
import {ActionAuthorization} from "../actions/authorization"
import { Dispatch } from "redux";
import { AuthorizationActionDispatcher } from "../reducers/authorization/types";

export type UserAuthorization = ConnectedProps<typeof connector>

const mapDispatchToProps  = (dispatch : Dispatch ) => {
    return {
        checkAuth : () => {dispatch(ActionAuthorization().checkAuthorization())} 
    }
}

const mapStateToProps = (state : RootState) => ({
    authorized : state.auth.authorized 
})

export const connector = connect(mapStateToProps,mapDispatchToProps);
