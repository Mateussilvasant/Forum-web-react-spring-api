import Service from '../type';

interface AuthService{
    checkAuthorization :() => boolean
}

export class AuthorizationService implements AuthService,Service{

    private static instance : AuthorizationService;

    static getInstance() : AuthorizationService{
        if(this.instance === null || this.instance === undefined){
            this.instance = new AuthorizationService();
        }
        return this.instance;
    }

    checkAuthorization() : boolean{
        return true;
    }

};
