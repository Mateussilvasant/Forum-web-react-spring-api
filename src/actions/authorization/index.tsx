import { loadAction } from "./action";
import { AuthService, authService } from "../../services/authorization";

export default interface ServiceAction {
    auth: AuthService;
}

export const AuthorizationActions  = () =>{ 
    return loadAction({auth : authService});
}