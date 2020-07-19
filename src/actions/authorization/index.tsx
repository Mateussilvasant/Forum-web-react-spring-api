import { initActions } from "./action";
import ServiceAction from "./service";
import { AuthService } from "../../services/authorization/type";
import { AuthorizationService, authService } from "../../services/authorization";

export const actions = () => {

    const auth: AuthorizationService = authService;

    const action = initActions({ auth });

    return action;
}