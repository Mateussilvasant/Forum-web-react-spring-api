import {AuthorizationActionDispatcher } from '../../reducers/authorization/types'
import ServiceAction from '.';

let instance: AuthorizationAction;

export default interface IAuthAction{
    checkAuthorization() : AuthorizationActionDispatcher;
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

export function loadAction(services : ServiceAction) : AuthorizationAction{
    if(instance === null || instance === undefined){
         return new AuthorizationAction(services);
    } 
    return instance;
 }

