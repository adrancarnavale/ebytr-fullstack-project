import { combineReducers } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';

export const rootReducer = combineReducers({
  register: registerReducer,
});
