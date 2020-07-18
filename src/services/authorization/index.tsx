import { AuthService } from "./type";
import Service from '../type';

export class AuthorizationService implements AuthService,Service{

    checkAuthorization() : boolean{
        return true;
    }

};

export const authService = new AuthorizationService(); 


export type auth = typeof AuthorizationService;