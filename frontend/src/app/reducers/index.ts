import { combineReducers } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';
import taskReducer from './TaskSlice';

export const rootReducer = combineReducers({
  register: registerReducer,
  task: taskReducer,
});
