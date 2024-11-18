import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gamesSlice';

export const store = configureStore({
  reducer: {
    games: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;