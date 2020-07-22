import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { useDispatch } from 'react-redux';

export const store = createStore(rootReducer); 

export const dispatch = store.dispatch;
