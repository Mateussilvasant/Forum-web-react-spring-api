import {AuthorizationActionDispatcher } from '../../reducers/authorization/types'
import ServiceAction from '.';


 interface IAuthAction{
    checkAuthorization() : AuthorizationActionDispatcher;
}

 export class AuthorizationAction implements IAuthAction{
    private services: ServiceAction;
    private static instance: AuthorizationAction;

    constructor(services : ServiceAction){
        this.services = services;
    }

    static getInstance(services : ServiceAction) : AuthorizationAction{

        if(this.instance === null || this.instance === undefined ){
            this.instance = new AuthorizationAction(services);
        } 

        return this.instance;
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

