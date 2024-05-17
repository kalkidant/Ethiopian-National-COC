// store.ts
import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from './slices/dashbordSlice';

export const store = configureStore({
  reducer: {
    data: dashboardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;