import { createStore } from 'redux';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer); 

export const dispatch = store.dispatch;
