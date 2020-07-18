import { combineReducers } from "redux"
import { authorizationReducer } from "../reducers/authorization/reducer"

export const rootReducer = combineReducers({
    auth: authorizationReducer,
})
  
export type RootState = ReturnType<typeof rootReducer>