import { configureStore } from '@reduxjs/toolkit';
import { hospitalSlice } from './server/ApiSlice';

export const store = configureStore({
    reducer: {
        [hospitalSlice.reducerPath]: hospitalSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(hospitalSlice.middleware),
});
