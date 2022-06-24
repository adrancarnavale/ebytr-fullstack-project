import { combineReducers } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';

export const rootReducer = combineReducers({
  token: tokenReducer,
});
