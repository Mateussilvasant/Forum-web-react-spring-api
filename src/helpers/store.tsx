import React from 'react';
import {createStore, combineReducers} from 'redux';
import { rootReducer } from './combineReducers';

export const store = createStore( rootReducer); 
