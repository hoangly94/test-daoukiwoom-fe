import { configureStore } from '@reduxjs/toolkit';
import { indexApi } from './modules/index/api';
import indexSlice from './modules/index';

export const store = configureStore({
  reducer: {
    [indexApi.reducerPath]: indexApi.reducer,
    index: indexSlice,
  },

  middleware: (gDM) => gDM()
    .concat(indexApi.middleware),
});


export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>