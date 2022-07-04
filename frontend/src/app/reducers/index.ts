import { combineReducers } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';
import taskReducer from './taskSlice';

export * from './registerSlice';
export * from './taskSlice';

export const rootReducer = combineReducers({
  register: registerReducer,
  task: taskReducer,
});
