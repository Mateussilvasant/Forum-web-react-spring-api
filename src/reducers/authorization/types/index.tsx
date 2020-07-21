
export const AUTHORIZATION = "USER_AUTHORIZATION";

export interface AuthorizationActionDispatcher {
    type: typeof AUTHORIZATION
    payload: {
        authorization: boolean
    }
}

export type AuthorizationActionTypes = AuthorizationActionDispatcher;


