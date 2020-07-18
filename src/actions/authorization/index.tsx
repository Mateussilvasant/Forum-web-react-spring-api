import { initActions } from "./action";
import AllServices from "./service";
import ServiceAction from "./service";
import { AuthService } from "../../services/authorization/type";
import { AuthorizationService, authService } from "../../services/authorization";

export const actions = () =>{
    const service : AuthorizationService= authService;
    const actions =  initActions({service});
    return actions;
}