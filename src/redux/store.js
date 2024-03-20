import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCore } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCore.reducerPath]: shazamCore.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCore.middleware),
});
