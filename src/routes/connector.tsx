import { ConnectedProps, connect } from "react-redux";
import { RootState } from "../helpers/reducers";
import { Dispatch } from "redux";
import { AuthorizationActions } from "../actions/authorization";

export type UserAuthorization = ConnectedProps<typeof connector>

const mapDispatchToProps  = (dispatch : Dispatch) =>({
    checkAuth : () => {
        dispatch(AuthorizationActions().checkAuthorization())
    } 
})

const mapStateToProps = (state : RootState) => ({
    authorized : state.auth.authorized 
})

export const connector = connect(mapStateToProps,mapDispatchToProps);
