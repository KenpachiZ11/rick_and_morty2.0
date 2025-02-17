import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from '../slice/heroesSlice';

export const store = configureStore({
  reducer : {
    heroes: heroesReducer
  }
});