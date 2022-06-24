import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from './counterReducer';

export const rootReducer = combineReducers({
  counter: counterSlice,
});
