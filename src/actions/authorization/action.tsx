import { AuthService } from "../../services/authorization/type";
import ServiceAction from "./service";

export default interface IAuthAction{
    checkAuthorization() : boolean;
}

export const initActions = (services: ServiceAction) => {
    return new AuthorizationAction(services);
}

class AuthorizationAction implements IAuthAction{
    private services: ServiceAction;

    constructor(services : ServiceAction){
        this.services = services;
    }

    checkAuthorization(): boolean {
        return true;
    }
    
} 