import Service from '../type';

export interface AuthService{
    checkAuthorization :() => boolean
}

export class AuthorizationService implements AuthService,Service{

    checkAuthorization() : boolean{
        return true;
    }

};

export const authService = new AuthorizationService(); 

