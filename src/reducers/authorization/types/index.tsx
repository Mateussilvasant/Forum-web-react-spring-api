
export const AUTHORIZATION = "USER_AUTHORIZATION";

interface Authorization {
    type: typeof AUTHORIZATION
    payload: {
        authorization: boolean
    }
}

export interface AuthorizationState {
    authorized: boolean
}

export type AuthorizationActionTypes = Authorization;

export enum ALL_STATUS {
    AUTHORIZATION = "USER_AUTHORIZATION"
}

