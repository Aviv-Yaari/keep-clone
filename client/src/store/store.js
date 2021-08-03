import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';

export const store = configureStore({
  reducer: { data: notesReducer },
});
