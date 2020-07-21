import { AuthService } from "../../services/authorization/type";
import ServiceAction from "./service";
import {AuthorizationActionDispatcher } from '../../reducers/authorization/types'
import { dispatch } from "../../helpers/store";

export default interface IAuthAction{
    checkAuthorization() : AuthorizationActionDispatcher;
}

export const initActions = (services: ServiceAction) => {
    return new AuthorizationAction(services);
}

class AuthorizationAction implements IAuthAction{
    private services: ServiceAction;

    constructor(services : ServiceAction){
        this.services = services;
    }

    checkAuthorization(): AuthorizationActionDispatcher {
        return{
            type : "USER_AUTHORIZATION",
            payload:{
                authorization: this.services.auth.checkAuthorization()
            }
          }
    }
    
} 


export type AuthorizationActionType = typeof AuthorizationAction;