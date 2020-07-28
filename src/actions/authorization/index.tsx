import { AuthorizationAction } from "./action";
import {AuthorizationService } from "../../services/authorization";

export default interface ServiceAction {
    auth: AuthorizationService;
}

export const AuthorizationActions  = () =>{ 
    return AuthorizationAction.getInstance({auth : AuthorizationService.getInstance()});
}